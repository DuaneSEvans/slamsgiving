import Image from "next/image"
import Link from "next/link"

export default function Nav(): JSX.Element {
  return (
    <nav className="bg-primary p-2 justify-between flex">
      <Link href="/" className="p-1">
        <Image src="/shrek-head.svg" alt="Home" width="32" height="32" />
      </Link>
      <DesktopNav />
    </nav>
  )
}


function DesktopNav(): JSX.Element {
  return (
    <div className="flex gap-6">
      <NavMenuOptions />
    </div>
  )
}

function NavMenuOptions({ onClick }: { onClick?: () => void }): JSX.Element {
  return (
    <>
      <NavMenuOption href="/gallery" onClick={onClick}>
        Gallery
      </NavMenuOption>
      <NavMenuOption href="/what" onClick={onClick}>
        What
      </NavMenuOption>
      <NavMenuOption href="/about-us" onClick={onClick}>
        About us
      </NavMenuOption>
    </>
  )
}

function NavMenuOption({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}): JSX.Element {
  return (
    <Link
      href={href}
      className="flex items-center mr-1 text-swamp"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
