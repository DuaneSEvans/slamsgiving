import { YEARS } from "lib/const"
import { useRouter } from "next/router"

type Year = "2024" | "2023"

/* eslint-disable @next/next/no-img-element */
export default function Gallery(): JSX.Element {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full items-center gap-16 h-full text-swamp py-12 px-2 md:px-12">
        <div className="flex flex-col gap-6">
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
          <Year />
        </div>
      </div>
    </div>
  )
}

function Year(): JSX.Element {
  const router = useRouter()
  const year = router.query.year

  if (typeof year !== "string" || !isSupportedYear(year)) {
    return <div>Invalid year</div>
  }

  return (
    <>
      <h1 className="text-center text-2xl sm:text-4xl font-bold">{year}</h1>
      <article className="flex justify-center text-justify">
        <Mosaic year={year} />
      </article>
    </>
  )
}

function Mosaic({ year }: { year: Year }): JSX.Element {
  const numOfPhotosForYear = getNumOfPhotosForYear(year)

  const images = Array.from(
    { length: numOfPhotosForYear },
    (_, i) => `/${year}/${i + 1}.jpg`
  )

  return (
    <ul className="columns-1 md:columns-2 lg:columns-3 gap-4 p-4">
      {images.map((src) => (
        <li className="break-inside-avoid" key={src}>
          <img className="block w-full mb-4" src={src} alt="🍳" />
        </li>
      ))}
    </ul>
  )
}

function isSupportedYear(year: string): year is Year {
  return YEARS.includes(year as Year)
}

function getNumOfPhotosForYear(year: Year): number {
  switch (year) {
    case "2024":
      return 108
    case "2023":
      return 76
  }
}
