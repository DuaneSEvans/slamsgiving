import Image from "next/image"
import Link from "next/link"
import EggDropdown from "./EggDropdown"

export default function Nav(): JSX.Element {
  return (
    <nav className="bg-primary p-2 justify-between flex z-10">
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

// TODO(dse): make everything a dropdown when on mobile
function NavMenuOptions(): JSX.Element {
  return (
    <>
      <EggDropdown>
        <NavMenuOption>Gallery</NavMenuOption>
      </EggDropdown>
      <NavMenuOption>
        <Link href="/what">What</Link>
      </NavMenuOption>
      <NavMenuOption>
        <Link href="/about-us">About us</Link>
      </NavMenuOption>
    </>
  )
}

function NavMenuOption({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <div className="flex items-center mr-1 text-swamp">{children}</div>
}
