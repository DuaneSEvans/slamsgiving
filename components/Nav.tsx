import Image from "next/image";
import Link from "next/link";

export default function Nav(): JSX.Element {
  return (
    <nav className="bg-[#c4d300] flex p-2 justify-between">
      <Link href="/" className="p-1">
        <Image src="/shrek-head.svg" alt="Home" width="32" height="32" />
      </Link>
      <Link href="/about-us" className="flex items-center mr-1">
        About us
      </Link>
    </nav>
  );
}
