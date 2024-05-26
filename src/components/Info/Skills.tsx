import Image from "next/image";
import HTML from "@/img/skills/HTML.svg";
import JavaScript from "@/img/skills/JavaScript.svg";
import TypeScript from "@/img/skills/TypeScript.svg";
import ReactSvg from "@/img/skills/React.svg";
import Vue from "@/img/skills/Vue.svg";
import CSS from "@/img/skills/CSS.svg";
import Sass from "@/img/skills/Sass.svg";
import TailwindCSS from "@/img/skills/TailwindCSS-Dark.svg";
import Bootstrap from "@/img/skills/Bootstrap.svg";
import Python from "@/img/skills/Python-Dark.svg";
import Django from "@/img/skills/Django.svg";
import SQLite from "@/img/skills/SQLite.svg";
import Git from "@/img/skills/Git.svg";
import Figma from "@/img/skills/Figma.svg";

export default function Skills() {
  return (
    <ul className="flex gap-2 p-2">
      <li>
        <Image
          src={HTML}
          width={40}
          height={40}
          alt="HTML"
        />
      </li>
      <li>
        <Image
          src={JavaScript}
          width={40}
          height={40}
          alt="JavaScript"
        />
      </li>
      <li>
        <Image
          src={TypeScript}
          width={40}
          height={40}
          alt="TypeScript"
        />
      </li>
      <li>
        <Image
          src={ReactSvg}
          width={40}
          height={40}
          alt="React"
        />
      </li>
      <li>
        <Image
          src={Vue}
          width={40}
          height={40}
          alt="Vue"
        />
      </li>
      <li>
        <Image
          src={CSS}
          width={40}
          height={40}
          alt="CSS"
        />
      </li>
      <li>
        <Image
          src={Sass}
          width={40}
          height={40}
          alt="Sass"
        />
      </li>
      <li>
        <Image
          src={TailwindCSS}
          width={40}
          height={40}
          alt="TailwindCSS"
        />
      </li>
      <li>
        <Image
          src={Bootstrap}
          width={40}
          height={40}
          alt="Bootstrap"
        />
      </li>
      {/* <li>
          <Image
            src={Python}
            width={40}
            height={40}
            alt="Python"
          />
        </li>
        <li>
          <Image
            src={Django}
            width={40}
            height={40}
            alt="Django"
          />
        </li>
        <li>
          <Image
            src={SQLite}
            width={40}
            height={40}
            alt="SQLite"
          />
        </li> */}
      <li>
        <Image
          src={Git}
          width={40}
          height={40}
          alt="Git"
        />
      </li>
      <li>
        <Image
          src={Figma}
          width={40}
          height={40}
          alt="Figma"
        />
      </li>
    </ul>
  );
}
