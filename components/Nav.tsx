import Image from "next/image";

export default function Nav(): JSX.Element {
  return (
    <nav className="bg-[#c4d300] flex p-2 justify-between">
      <a href="" className="p-1">
        <Image src="/shrek-head.svg" alt="Home" width="32" height="32" />
      </a>
      <a
        href=""
        onClick={() => alert("coming soon!")}
        className="flex items-center mr-1"
      >
        About us
      </a>
    </nav>
  );
}
