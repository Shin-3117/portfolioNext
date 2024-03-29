import Information from "@/components/Information";
import JsShootingGame from "@/components/JsShootingGame";
import MovieSelector from "@/components/MovieSelector";
import ReactTypescriptMovie from "@/components/ReactTypescriptMovie";
import SSI from "@/components/SimpleSupportInvest";
import Skills from "@/components/Skills";
import UH from "@/components/UH";
export default function Home() {
  return (
    <main>
      <section id="Information" className="h-screen center w-[90vw] m-auto">
        <div className="flex flex-col items-center">
          <p className="text-5xl animate-jump">안녕하세요!</p>
          <h1 className="text-6xl py-5">프론트엔드 개발자 신현중입니다.</h1>
          <Information />
        </div>
      </section>
      <section id="Skills" className="bg-stone-100 center flex-col mb-10">
        <h2 className="text-3xl font-semibold p-2">Skills</h2>
        <Skills />
      </section>
      <section id="Projects" className="center flex-col">
        <h2 className="text-3xl font-semibold p-2">Projects</h2>
        <UH />
        <JsShootingGame />
        <SSI />
        <ReactTypescriptMovie />
        <MovieSelector />
      </section>
    </main>
  );
}
