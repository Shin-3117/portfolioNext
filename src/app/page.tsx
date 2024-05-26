import Info from "@/components/Info";
import Information from "@/components/Information";
import JSG from "@/components/JSG";
import JsShootingGame from "@/components/JsShootingGame";
import MovieSelector from "@/components/MovieSelector";
import ReactTypescriptMovie from "@/components/ReactTypescriptMovie";
import SSI from "@/components/SimpleSupportInvest";
import Skills from "@/components/Skills";
import UH from "@/components/UH";
export default function Home() {
  return (
    <main className="bg-black">
      <JSG />
      <Info />
      <section
        id="Information"
        className="h-screen center w-[90vw] m-auto"
      >
        <div className="flex flex-col items-center">
          <Information />
        </div>
      </section>
      <section
        id="Skills"
        className="bg-stone-100 center flex-col mb-10"
      >
        <h2 className="text-3xl font-semibold p-2">
          Skills
        </h2>
        <Skills />
      </section>
      <section
        id="Projects"
        className="center flex-col"
      >
        <h2 className="text-3xl font-semibold p-2">
          Projects
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
