"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { motion } from "framer-motion"
import { YEARS } from "lib/const"
import Link from "next/link"
import { useState } from "react"

function EggDropdown({ children }: { children: React.ReactNode }): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="flex items-center mr-1 text-swamp">
          {children}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <FriedEggWrapper>
            {YEARS.map((year, i) => (
              <DropdownMenu.Item key={year}>
                <MenuItem index={i}>
                  <Link
                    href={`/gallery/${year}`}
                    className="relative text-swamp"
                    onClick={() => setOpen(false)}
                  >
                    {year}
                  </Link>
                </MenuItem>
              </DropdownMenu.Item>
            ))}
          </FriedEggWrapper>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

function FriedEggWrapper({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <motion.ol
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 100,
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="fried-egg">
          <div className="white" />
          <motion.div
            // Due to translation in CSS, must move in "x" direction but it is vertical
            initial={{ x: 60 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 70,
              delay: 0.1,
            }}
          >
            <div className="yolk" />
            <div className="light" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </motion.ol>
  )
}

function MenuItem({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}): JSX.Element {
  return (
    <motion.li
      className="rounded-lg backdrop-blur-md bg-white/30 px-2 py-1 hover:scale-105 transition-transform"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.7 - index * 0.1,
      }}
    >
      {children}
    </motion.li>
  )
}

export default EggDropdown
