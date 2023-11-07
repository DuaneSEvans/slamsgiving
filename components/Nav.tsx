import Image from "next/image"
import Link from "next/link"

export default function Nav(): JSX.Element {
  return (
    <nav className="bg-primary flex p-2 justify-between">
      <Link href="/" className="p-1">
        <Image src="/shrek-head.svg" alt="Home" width="32" height="32" />
      </Link>
      <div className="flex gap-12">
        <Link href="/history" className="flex items-center mr-1">
          History
        </Link>
        <Link href="/about-us" className="flex items-center mr-1">
          About us
        </Link>
      </div>
    </nav>
  )
}
