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
  name: string;
  imageUrl: string;
  role: Roles;
  description: string;
};

export default function Team(): JSX.Element {
  const teamMembers: TeamMember[] = [
    {
      name: "Ryan",
      imageUrl: "teamMembers/ryan-shirt.jpeg",
      role: Roles.Finance,
      description:
        "Ryan, our Finance Director, is known for his financial acumen and quirky sense of humor. He's affectionately nicknamed 'Morty' due to his camping misadventures, struggling to build a tent. His financial prowess may rival his camping skills, but he's a crucial asset to our team.",
    },
    {
      name: "Daniel",
      imageUrl: "teamMembers/daniel-astonished.jpeg",
      role: Roles.Communications,
      description:
        "Danial, our Communications Director, not only excels in conveying messages effectively but also has a knack for providing fantastic massages. He's the go to person for easing tensions, both in the office and on aching shoulders. His skills extend beyond words, making him an invaluable asset to our team.",
    },
    {
      name: "Rachel",
      imageUrl: "teamMembers/rachel-water.jpeg",
      role: Roles.Activities,
      description:
        "Rachel, our vibrant Activities Director, is fondly called 'Lassy' for her lively spirit. She's the life of the party, always planning and organizing events that bring everyone together. Whether it's a social gathering or team-building activities, Rachel ensures a great time for all.",
    },
    {
      name: "Eva",
      imageUrl: "teamMembers/eva.jpeg",
      role: Roles.Decoration,
      description:
        "Eva, our Decorations Director, recently discovered the dance move 'floss', a testament to her adaptability and willingness to learn. Despite her late introduction to this viral dance, Eva's creativity and eye for aesthetics make her an exceptional decorations maestro.",
    },
    {
      name: "Julian",
      imageUrl: "teamMembers/julian-between-rocks.jpeg",
      role: Roles.Music,
      description:
        "Julian, our Music Director, has a delightful Italian allure about him that captivates everyone. Despite not being Italian, his passion for music is unmistakably genuine. He orchestrates melodious tunes, harmonizing our team's efforts seamlessly.",
    },
    {
      name: "Jake",
      imageUrl: "teamMembers/jake.jpeg",
      role: Roles.Food,
      description:
        "Jake, our Food Director, has an unparalleled fascination with rocks. He brings this same enthusiasm to the culinary world, where he garnishes dishes with creative flair. Just as rocks form a solid foundation, Jake's culinary skills form the bedrock of our team's gastronomic experience.",
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
  ];

  return (
    <div className="flex justify-around flex-wrap">
      {teamMembers.map((teamMember) => {
        return (
          <article
            key={teamMember.name}
            className="max-w-[500px] mx-4 my-12 p-2 gap-10"
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
        );
      })}
    </div>
  );
}
