import { DateTime } from "luxon"

export const SLAMSGIVING_DATE = DateTime.fromISO("2025-11-09T00:20:00Z")

enum Roles {
  Finance = "Finance",
  Tech = "Technologist",
  Music = "Music",
  Decoration = "Decorations",
  Communications = "Communications",
  Food = "Food",
  Beverage = "Beverage",
  Activities = "Activities",
  Begonias = "Begonias",
  Photography = "Photography",
  Swamp = "Swamp",
}
export type TeamMember = {
  name: string
  imageUrl: string
  role: Roles
  description: string
}

export const boardOfDirectors: TeamMember[] = [
  {
    name: "Ryan 'Morty'",
    imageUrl: "/teamMembers/ryan.jpeg",
    role: Roles.Finance,
    description:
      "As a Slamsgiving Founder, Ryan has always taken a keen interest in propagating the party, turned event, turned festival and was instrumental in reviving it after the pandemic. In the past, Ryan has volunteered as a social coordinator, food and beverage slamager, and even as a car. A long time ago we implanted a subdermal chip that can call upon dormant nanobots in his blood-stream to restructure certain parts of his anatomy to turn him into a car. And, thus so, he has extensive party planning and budgeting experience. Ryan is very excited that Slamsgiving has grown past the capacity of anyones apartment, and looks forward to the inevitable exponential growth of this, the holiest of hollandaise.",
  },
  {
    name: "Daniel",
    imageUrl: "/teamMembers/daniel-astonished.jpeg",
    role: Roles.Communications,
    description:
      "Daniel, our Communications Director, is not just a maestro of messages but a virtuoso on wheels, reminiscent of Shrek in his bold escapades. He fearlessly navigates the bicycle realm, attempting audacious jumps that often result in spectacular falls. Despite these mishaps and the occasional eating shit moment, his ability to effectively convey his experiences through stories and imagery is unmatched. Much like crafting a compelling narrative, he refines his jumps, learns from the falls, and communicates these lessons to his fellow biking enthusiasts, sharing a tale as grand as Shrek's adventures in the swamp. Daniel is the epitome of seamless communication, whether on the trails or within the team, where every fall is a chance to rise and share the adventure anew, just like our favorite ogre.",
  },
  {
    name: "Rachel",
    imageUrl: "/teamMembers/rachel-water.jpeg",
    role: Roles.Activities,
    description:
      "Marine biologist by day, chief activities officer by night - Rachel's knowledge of the cold, slippery, and wet lend herself well to both roles. Affectionately known as 'Fish Cop', you can always catch this fish copping the latest slamming trends!",
  },
  {
    name: "Eva",
    imageUrl: "/teamMembers/eva-bike.jpeg",
    role: Roles.Decoration,
    description:
      "Eva, our Decorations Director, recently discovered the dance move 'floss', a testament to her adaptability and willingness to learn. Despite her late introduction to this viral dance, Eva's creativity and eye for aesthetics make her an exceptional decorations maestro.",
  },
  {
    name: "Julian",
    imageUrl: "/teamMembers/julian-astro.jpeg",
    role: Roles.Music,
    description:
      "Julian has a secret, invisible, musical mustache that whispers the unknown mysteries of the musical multiverses. Thanks to this mustache, Julian knows the chord progressions of all songs in the universe. Even those not written yet. A little known fact about him is that his heart beats in time with whatever song is currently being played. So if the drummer speeds up by 1 BPM, our musical director will be the first one to know because he can feel it in his bones. Julian is a construction worker by day. It is often said that he can construct a bridge with just his hammer-ons and careful quotations of the Shrek Karaoke Dance Party. During his lunch breaks, Julian is often seen directing traffic with one of his 69 electric guitars. When Julian conducts traffic there is never a fender bender. Thanks to our lovely musical director, our hashbrowns will be singing, the pancakes will be dancing, the dance floor will be bumpin', and the swamp will be a rockin' all night long.",
  },
  {
    name: "Jake",
    imageUrl: "/teamMembers/jake.jpeg",
    role: Roles.Food,
    description:
      "Jake MacDonald brings a wealth of experience to the role of Food Director for Slamsgiving 2023. He is a Rock Expert, a highly regarded lawyer, and the most photogenic guy around. His unique skill of knowing exactly how much water to mix with pancake powder on the first try will be invaluable to his success as Food Director this year, no matter how drunk he is or how many Santa beards he's wearing. Jake has travelled this vast country, visiting Denny's locations far and wide, and discovering the Slamtastic secrets they have to offer, and will pour all that knowledge directly into the food we eat at Slamsgiving 2023.",
  },
  {
    name: "Mika",
    imageUrl: "/teamMembers/mika-eus.jpeg",
    role: Roles.Beverage,
    description:
      "Mika, our Beverage Director, boasts sick hair and an even more impressive taste in beverages. With her hair as dynamic as her ideas, she concocts drinks that leave a lasting impression. Mika's mixology skills are as vibrant and refreshing as her personality.",
  },
  {
    name: "Duane",
    imageUrl: "/teamMembers/duane-dress.jpeg",
    role: Roles.Tech,
    description:
      "Duane, our Technologist, is the man with the plan and a helmet. Always wearing a helmet due to his run ins with trees, he ensures our technological endeavors are as well protected and innovative as his head. Duane's determination and resilience make him an indispensable tech genius for our team.",
  },
  {
    name: "Cameron",
    imageUrl: "/teamMembers/cameron.jpg",
    role: Roles.Begonias,
    description:
      "Cameron, Director of Begonias, is a plant whisperer by day and mushroom forager by weekend. With an impeccable eye for begonias and a deep love for all things fungi, he is always cultivating something extraordinary. His most memorable adventure was a life-changing trip to the legendary 'Bone Town.' Whether nurturing a bloom or hunting for the perfect morel, Cameron keeps everything thriving in full swing.",
  },
  {
    name: "Sadie",
    imageUrl: "/teamMembers/sadie.jpeg",
    role: Roles.Swamp,
    description:
      "Sadie, our esteemed Director of the Swamp, is the guardian of all things funky and fun in our beloved bog. With a keen nose for the perfect swamp aroma and an eye for that just right shade of murky green, Sadie ensures our swamp is always in top form. As the official greeter of the mire, she welcomes every guest with the warmth of decomposing vegetation and the charm of a friendly bog creature. Sadie's unique talent lies in maintaining the delicate balance between 'appropriately funky' and 'still habitable,' creating an atmosphere where fun thrives alongside the funk. Under her watchful eye, the swamp remains the beating heart of our Slamsgiving celebration, pulsing with life, laughter, and just the right amount of slime.",
  },
]

export const officers: TeamMember[] = [
  {
    name: "Emily",
    imageUrl: "/teamMembers/emily.jpg",
    role: Roles.Photography,
    description:
      "Emily, our Officer of Photography, is a master of light and shadow, capturing moments that tell stories as enchanting as Fiona's transformation under the moonlight. With a passion rivaling a dragon's love for treasure, Emily's camera turns every Denny's Grand Slam into a royal feast fit for a fairytale kingdom. Her lens lovingly caresses each pancake stack and sizzling bacon strip, transforming humble diner fare into works of art that would make even the most discerning ogre trade their swamp for a booth. While she occasionally photographs non Denny's subjects, Emily's true calling is immortalizing the beauty of a perfectly plated Moons Over My Hammy.",
  },
]

export const YEARS = ["2023", "2024"] as const
export type Year = (typeof YEARS)[number]
