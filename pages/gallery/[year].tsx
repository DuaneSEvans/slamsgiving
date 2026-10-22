import { YEARS, type Year } from "lib/const"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Gallery() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full items-center gap-16 h-full text-swamp py-12 px-2 md:px-12">
        <div className="flex flex-col gap-6">
          <Year />
        </div>
      </div>
    </div>
  )
}

function Year() {
  const router = useRouter()
  const year = router.query.year

  if (typeof year !== "string" || !isSupportedYear(year)) {
    return <div>Invalid year</div>
  }

  return (
    <>
      {year !== "2025" && (
        <h1 className="text-center cursive-font">
          Photography by{" "}
          <a
            href="https://www.instagram.com/robinrobinphotography/"
            className="underline"
            target="_blank"
          >
            @robinrobinphotography
          </a>
        </h1>
      )}
      <h1 className="text-center text-2xl sm:text-4xl font-bold">{year}</h1>
      <article className="flex justify-center text-justify">
        <Mosaic year={year} />
      </article>
    </>
  )
}

function Mosaic({ year }: { year: Year }) {
  const images = Array.from(
    { length: getNumOfPhotosForYear(year) },
    (_, i) => `/${year}/${i + 1}.jpg`
  )

  return (
    <ul className="columns-1 md:columns-2 lg:columns-3 gap-4 p-4">
      {images.map((src, index) => (
        <li className="break-inside-avoid" key={src}>
          <Image
            className="block w-full mb-4"
            src={src}
            alt="🍳"
            width={300}
            height={300}
            loading={
              year === "2025" && (index === 0 || index === 5 || index === 10)
                ? "eager"
                : "lazy"
            }
          />
        </li>
      ))}
    </ul>
  )
}

function isSupportedYear(year: string): year is Year {
  return YEARS.some((supportedYear) => supportedYear === year)
}

function getNumOfPhotosForYear(year: Year): number {
  switch (year) {
    case "2025":
      return 13
    case "2024":
      return 108
    case "2023":
      return 76
  }
}
