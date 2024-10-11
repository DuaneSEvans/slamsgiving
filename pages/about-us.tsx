import TeamCards from "components/TeamCards"
import { boardOfDirectors, officers } from "lib/const"

export default function AboutUs(): JSX.Element {
  return (
    <div className="h-full text-swamp py-12 px-2 md:px-12">
      <h1 className="text-center md:text-4xl text-2xl font-bold">
        Board of Directors
      </h1>
      <TeamCards teamMembers={boardOfDirectors} />
      <br />
      <h1 className="text-center md:text-4xl text-2xl font-bold">Officers</h1>
      <TeamCards teamMembers={officers} />
    </div>
  )
}
