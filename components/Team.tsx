/* eslint-disable @next/next/no-img-element */
enum Roles {
  Finance = "Finance",
  Tech = "Technologist",
  Music = "Music",
  Decoration = "Decorations",
  Communications = "Communications",
  Food = "Food",
  Beverage = "Beverage",
  Activities = "Activities",
}
type TeamMember = {
  name: string
  imageUrl: string
  role: Roles
  description: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Ryan 'Morty'",
    imageUrl: "teamMembers/ryan.jpeg",
    role: Roles.Finance,
    description:
      "As a Slamsgiving Founder, Ryan has always taken a keen interest in propagating the party, turned event, turned festival and was instrumental in reviving it after the pandemic. In the past, Ryan has volunteered as a social coordinator, food and beverage slamager, and even as a car. A long time ago we implanted a subdermal chip that can call upon dormant nanobots in his blood-stream to restructure certain parts of his anatomy to turn him into a car. And, thus so, he has extensive party planning and budgeting experience. Ryan is very excited that Slamsgiving has grown past the capacity of anyones apartment, and looks forward to the inevitable exponential growth of this, the holiest of hollandaise.",
  },
  {
    name: "Daniel",
    imageUrl: "teamMembers/daniel-astonished.jpeg",
    role: Roles.Communications,
    description:
      "Daniel, our Communications Director, is not just a maestro of messages but a virtuoso on wheels, reminiscent of Shrek in his bold escapades. He fearlessly navigates the bicycle realm, attempting audacious jumps that often result in spectacular falls. Despite these mishaps and the occasional eating shit moment, his ability to effectively convey his experiences through stories and imagery is unmatched. Much like crafting a compelling narrative, he refines his jumps, learns from the falls, and communicates these lessons to his fellow biking enthusiasts, sharing a tale as grand as Shrek's adventures in the swamp. Daniel is the epitome of seamless communication, whether on the trails or within the team, where every fall is a chance to rise and share the adventure anew, just like our favorite ogre.",
  },
  {
    name: "Rachel",
    imageUrl: "teamMembers/rachel-water.jpeg",
    role: Roles.Activities,
    description:
      "Marine biologist by day, chief activities officer by night - Rachel's knowledge of the cold, slippery, and wet lend herself well to both roles. Affectionately known as 'Fish Cop', you can always catch this fish copping the latest slamming trends!",
  },
  {
    name: "Eva",
    imageUrl: "teamMembers/eva-bike.jpeg",
    role: Roles.Decoration,
    description:
      "Eva, our Decorations Director, recently discovered the dance move 'floss', a testament to her adaptability and willingness to learn. Despite her late introduction to this viral dance, Eva's creativity and eye for aesthetics make her an exceptional decorations maestro.",
  },
  {
    name: "Julian",
    imageUrl: "teamMembers/julian-astro.jpeg",
    role: Roles.Music,
    description:
      "Julian has a secret, invisible, musical mustache that whispers the unknown mysteries of the musical multiverses. Thanks to this mustache, Julian knows the chord progressions of all songs in the universe. Even those not written yet. A little known fact about him is that his heart beats in time with whatever song is currently being played. So if the drummer speeds up by 1 BPM, our musical director will be the first one to know because he can feel it in his bones. Julian is a construction worker by day. It is often said that he can construct a bridge with just his hammer-ons and careful quotations of the Shrek Karaoke Dance Party. During his lunch breaks, Julian is often seen directing traffic with one of his 69 electric guitars. When Julian conducts traffic there is never a fender bender. Thanks to our lovely musical director, our hashbrowns will be singing, the pancakes will be dancing, the dance floor will be bumpin', and the swamp will be a rockin' all night long.",
  },
  {
    name: "Jake",
    imageUrl: "teamMembers/jake.jpeg",
    role: Roles.Food,
    description:
      "Jake MacDonald brings a wealth of experience to the role of Food Director for Slamsgiving 2023. He is a Rock Expert, a highly regarded lawyer, and the most photogenic guy around. His unique skill of knowing exactly how much water to mix with pancake powder on the first try will be invaluable to his success as Food Director this year, no matter how drunk he is or how many Santa beards he's wearing. Jake has travelled this vast country, visiting Denny's locations far and wide, and discovering the Slamtastic secrets they have to offer, and will pour all that knowledge directly into the food we eat at Slamsgiving 2023.",
  },
  {
    name: "Mika",
    imageUrl: "teamMembers/mika-eus.jpeg",
    role: Roles.Beverage,
    description:
      "Mika, our Beverage Director, boasts sick hair and an even more impressive taste in beverages. With her hair as dynamic as her ideas, she concocts drinks that leave a lasting impression. Mika's mixology skills are as vibrant and refreshing as her personality.",
  },
  {
    name: "Duane",
    imageUrl: "teamMembers/duane-dress.jpeg",
    role: Roles.Tech,
    description:
      "Duane, our Technologist, is the man with the plan and a helmet. Always wearing a helmet due to his run ins with trees, he ensures our technological endeavors are as well protected and innovative as his head. Duane's determination and resilience make him an indispensable tech genius for our team.",
  },
]

export default function Team(): JSX.Element {
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
                <img
                  alt={`Photo of ${teamMember.name}`}
                  src={teamMember.imageUrl}
                  width={"100%"}
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
