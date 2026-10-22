import { SLAMSGIVING_DATE } from "lib/const"

export function EventDate() {
  return (
    <article className="p-6 cursive-font font-bold md:text-2xl text-lg">
      <p>{SLAMSGIVING_DATE.toFormat("MMMM dd, yyyy")}</p>
      <p>{SLAMSGIVING_DATE.toFormat("h.mm a")}</p>
    </article>
  )
}
