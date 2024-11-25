import Link from "next/link"

export function TicketButton(): JSX.Element {
  return (
    <div className="flex justify-center">
      <Link
        href="https://forms.gle/YZrAVThivf2kf4E78"
        target="_blank"
        className="text-2xl bg-primary font-semibold border-transparent focus:ring-blue-500 shadow-md py-2 px-4 rounded-lg hover:scale-105 transition-all"
      >
        Tickets
      </Link>
    </div>
  )
}
