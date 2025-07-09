"use client"

import Image from "next/image"
import { useState } from "react"

const jakeImageURLs = [
  "/teamMembers/jake-average-joes.jpeg",
  "/teamMembers/jake-axe.jpeg",
  "/teamMembers/jake-bird.jpeg",
  "/teamMembers/jake-blue-hat.jpeg",
  "/teamMembers/jake-blue-nose.jpeg",
  "/teamMembers/jake-blur.jpeg",
  "/teamMembers/jake-cats.jpeg",
  "/teamMembers/jake-christmas.jpeg",
  "/teamMembers/jake-golf.jpeg",
  "/teamMembers/jake-mario.jpeg",
  "/teamMembers/jake-shaving.jpeg",
  "/teamMembers/jake-storm.jpeg",
  "/teamMembers/jake-tree-hugging.jpeg",
  "/teamMembers/jake.jpeg",
]

/**
 * Randomly choose an item from an array.
 * @param arr The input array
 * @returns A random item from the array
 * @throws Will throw if the array is empty
 *
 * @example
 * choose([1, 2, 3]) // 1 or 2 or 3
 * choose([]) // Error: Cannot choose from empty array
 */
function choose<T>(arr: ReadonlyArray<T>): T {
  if (arr.length === 0) {
    throw new Error("Cannot choose from empty array")
  }
  return arr[Math.floor(Math.random() * arr.length)]!
}

export function JakeMachine(): JSX.Element {
  const [imageURL, setImageURL] = useState(choose(jakeImageURLs))
  return (
    <div className="flex flex-col items-center text-center text-swamp md:py-12 py-6 gap-8">
      <h1 className="md:text-6xl text-4xl font-bold wrap">Jake Generator</h1>
      <div className="flex flex-col sm:max-w-[400px] w-screen justify-between md:gap-6 gap-4 px-1">
        <button
          className="bg-swamp hover:bg-primary text-white hover:text-black font-bold py-2 px-4 rounded-full"
          onClick={() => setImageURL(choose(jakeImageURLs))}
        >
          Hit me
        </button>
        <div className="overflow-y-clip max-h-[500px] grayscale jake-machine-image-wrapper">
          <Image
            key={imageURL}
            alt="A funny photo of jake"
            src={imageURL}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}
