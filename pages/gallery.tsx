/* eslint-disable @next/next/no-img-element */
export default function Gallery(): JSX.Element {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full items-center gap-16 h-full text-swamp py-12 px-2 md:px-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-center font-['Chalkboard']">
            <a
              href="https://robinrobinphotography.mypixieset.com/"
              className="underline"
              target="_blank"
            >
              @robinrobinphotography
            </a>
          </h1>
          <br />
          <h1 className="text-center text-2xl sm:text-4xl font-bold">2024</h1>
          <article className="flex justify-center text-justify">
            Still cooking 🍳
          </article>
          <br />
          <br />
          <h1 className="text-center text-2xl sm:text-4xl font-bold">2023</h1>
          <article className="flex justify-center text-justify">
            <Mosaic />
          </article>
        </div>
      </div>
    </div>
  )
}

function Mosaic(): JSX.Element {
  const images = Array.from({ length: 76 }, (_, i) => `2023/${i + 1}.jpg`)

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
