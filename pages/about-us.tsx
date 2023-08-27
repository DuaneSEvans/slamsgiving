import Team from "components/Team";

export default function AboutUs(): JSX.Element {
  return (
    <div className="h-full text-[#4F5400] py-12 px-2 md:px-12">
      <h1 className="text-left md:text-4xl text-2xl font-bold">
        Meet the team
      </h1>
      <Team />
    </div>
  );
}
