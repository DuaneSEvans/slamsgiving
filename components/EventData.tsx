import { SLAMSGIVING_DATE } from "lib/const"

export function EventDate() {
  const date = SLAMSGIVING_DATE.setLocale("en-US")

  return (
    <article className="p-6 cursive-font font-bold md:text-2xl text-lg">
      <p>{date.toFormat("MMMM d, yyyy")}</p>
      <p>{date.toFormat("h:mm a")}</p>
    </article>
  )
}
