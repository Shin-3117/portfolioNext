import Info from "@/components/Info";
import JSG from "@/components/JSG";
import JsShootingGame from "@/components/JsShootingGame";
import MovieSelector from "@/components/MovieSelector";
import ReactTypescriptMovie from "@/components/ReactTypescriptMovie";
import SSI from "@/components/SimpleSupportInvest";
import UH from "@/components/UH";

export default function Home() {
  return (
    <main className="flex flex-col">
      <JSG />
      <Info />

      <section
        id="Project"
        className="center flex-col"
      >
        <h2 className="text-6xl p-2">
          PROJECT
        </h2>
        <UH />
        <JsShootingGame />
        <SSI />
        <ReactTypescriptMovie />
        <MovieSelector />
      </section>
    </main>
  );
}
