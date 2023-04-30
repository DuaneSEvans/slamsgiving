import { CountDown } from "../components/CountDown";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between text-center py-12 md:px-12">
      <h1 className="md:text-6xl text-4xl font-bold uppercase">slamsgiving</h1>
      <CountDown />
    </div>
  );
}
