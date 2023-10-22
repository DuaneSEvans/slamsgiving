import Team from "components/Team"

export default function AboutUs(): JSX.Element {
  return (
    <div className="h-full text-[#4F5400] py-12 px-2 md:px-12">
      <h1 className="text-center md:text-4xl text-2xl font-bold">
        Board of Directors
      </h1>
      <Team />
    </div>
  )
}
