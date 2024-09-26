import { EventDate } from "components/EventData"
import { CountDown } from "../components/CountDown"
import { TicketButton } from "components/TicketButton"

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between text-center text-swamp py-12 px-2 md:px-12">
      <div className="flex flex-col gap-6">
        <h1 className="md:text-6xl text-4xl font-bold">Slamsgiving</h1>
        <article className="flex justify-center">
          <p className="sm:w-2/3 text-lg lg:text-xl cursive-font">
            Slamsgiving is a celebration of the greatest running joke of our
            generation. Simply, anything that slams belongs at Slamsgiving. A
            Denny’s Grand Slam? Check. Slamming drinks? Sign me up. Shrek Super
            Slam? A classic. Slam poetry? Break a leg. The question is, do YOU
            slam?
          </p>
        </article>
      </div>
      <TicketButton />
      <CountDown />
      <EventDate />
    </div>
  )
}
