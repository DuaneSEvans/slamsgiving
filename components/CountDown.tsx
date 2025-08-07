"use client"

import { useEffect, useState } from "react"
import { DateTime, Duration } from "luxon"
import { SLAMSGIVING_DATE } from "lib/const"
import { motion, Variants } from "framer-motion"
import { Loader } from "./Loader"

function getTimeUntilSlams(): Duration {
  return SLAMSGIVING_DATE.diff(DateTime.now(), [
    "months",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ])
}

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

export function CountDown() {
  const [timeRemaining, setTimeRemaining] = useState<Duration | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeUntilSlams())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!timeRemaining) {
    return <Loader />
  }

  const timeUnits = [
    { unit: "months", value: timeRemaining.months },
    { unit: "days", value: timeRemaining.days },
    { unit: "hours", value: timeRemaining.hours },
    { unit: "minutes", value: timeRemaining.minutes },
    { unit: "seconds", value: timeRemaining.seconds },
  ]

  return (
    <motion.div
      className="flex justify-center lg:gap-6 md:gap-4 font-mono"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {timeUnits.map(({ unit, value }) => (
        <motion.div key={unit} variants={item}>
          <CountDownBox value={value} label={unit} />
        </motion.div>
      ))}
    </motion.div>
  )
}

function CountDownBox({
  value,
  label,
}: {
  value: number
  label: string
}): JSX.Element {
  return (
    <div className="flex flex-col lg:p-5 p-2">
      <span className="lg:text-8xl md:text-5xl text-3xl">
        {value < 0 ? "00" : value < 10 ? "0" + value : value}
      </span>
      <span>{label}</span>
    </div>
  )
}
