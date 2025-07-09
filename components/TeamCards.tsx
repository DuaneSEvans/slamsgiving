import { TeamMember } from "lib/const"
import Image from "next/image"

export default function TeamCards({
  teamMembers,
}: {
  teamMembers: TeamMember[]
}): JSX.Element {
  return (
    <div className="flex justify-around flex-wrap">
      {teamMembers.map((teamMember) => {
        return (
          <article
            key={teamMember.name}
            className="max-w-[500px] mx-4 my-12 p-2 gap-10 text-justify"
          >
            <div className="relative">
              <div className="max-h-[600px] overflow-y-clip grayscale">
                <Image
                  alt={`Photo of ${teamMember.name}`}
                  src={teamMember.imageUrl}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="absolute -left-4 bottom-14 w-1/3 min-w-fit bg-primary">
                <span className="inline-block mx-7 pr-2 py-2">
                  {teamMember.name}
                </span>
              </div>
              <div className="absolute -left-4 bottom-2 w-1/2 min-w-fit bg-primary">
                <span className="inline-block mx-7 pr-2 py-2">
                  {teamMember.role}
                </span>
              </div>
            </div>
            <div className="py-4">
              <p>{teamMember.description}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
