import Image from "next/image";
import HTML from "../img/skills/HTML.svg";
import JavaScript from "../img/skills/JavaScript.svg";
import TypeScript from "../img/skills/TypeScript.svg";
import ReactSvg from "../img/skills/React.svg";
import Vue from "../img/skills/Vue.svg";
import CSS from "../img/skills/CSS.svg";
import Sass from "../img/skills/Sass.svg";
import TailwindCSS from "../img/skills/TailwindCSS-Dark.svg";
// import Bootstrap from "../img/skills/Bootstrap.svg";
import Python from "../img/skills/Python-Dark.svg";
import Django from "../img/skills/Django.svg";
import SQLite from "../img/skills/SQLite.svg";
import Git from "../img/skills/Git.svg";
export default function Skills() {
  return (
    <ul className="flex gap-2 p-2">
      <li>
        <Image src={HTML} width={100} height={100} alt="HTML" />
      </li>
      <li>
        <Image src={JavaScript} width={100} height={100} alt="JavaScript" />
      </li>
      <li>
        <Image src={TypeScript} width={100} height={100} alt="TypeScript" />
      </li>
      <li>
        <Image src={ReactSvg} width={100} height={100} alt="React" />
      </li>
      <li>
        <Image src={Vue} width={100} height={100} alt="Vue" />
      </li>
      <li>
        <Image src={CSS} width={100} height={100} alt="CSS" />
      </li>
      <li>
        <Image src={Sass} width={100} height={100} alt="Sass" />
      </li>
      <li>
        <Image src={TailwindCSS} width={100} height={100} alt="TailwindCSS" />
      </li>
      {/* <li>
        <Image src={Bootstrap} width={100} height={100} alt="Bootstrap" />
      </li> */}
      <li>
        <Image src={Python} width={100} height={100} alt="Python" />
      </li>
      <li>
        <Image src={Django} width={100} height={100} alt="Django" />
      </li>
      <li>
        <Image src={SQLite} width={100} height={100} alt="SQLite" />
      </li>
      <li>
        <Image src={Git} width={100} height={100} alt="Git" />
      </li>
    </ul>
  );
}
