import Skills from "./Info/Skills";
import MyInfo from "./Info/MyInfo";
import RunBarCard from "./_runbarchart/RunBarCard";

export default function Info() {
  return (
    <section className="p-5 flex flex-col lg:flex-row gap-5 lg:justify-around">
      <MyInfo />
      <div className="flex flex-col gap-4">
        <p className="text-6xl">
          SKILL
        </p>
        <Skills />
        <RunBarCard />
      </div>
    </section>
  );
}
