import Image from "next/image";
import COALogo from "@/img/projects/COA/logo.svg";
import JsShootingGame from "@/components/projects/JsShootingGame";
import MovieSelector from "@/components/projects/MovieSelector";
import ReactTypescriptMovie from "@/components/projects/ReactTypescriptMovie";
import SSI from "@/components/projects/SimpleSupportInvest";
import UH from "@/components/projects/UH";
import COA from "./projects/COA";

export default function Projects() {
  return (
    <section
      id="Project"
      className="p-5"
    >
      <div className="flex items-center">
        <h2 className="text-6xl">
          PROJECT
        </h2>
        {/* <a href="#landing">
          <Image
            src={COALogo}
            width={48}
            height={48}
            alt="COA Logo"
          />
        </a> */}
      </div>
      <COA />
      <UH />
      <JsShootingGame />
      <SSI />
      {/* <ReactTypescriptMovie /> */}
      <MovieSelector />
    </section>
  );
}
