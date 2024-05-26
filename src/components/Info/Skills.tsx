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
          width={60}
          height={60}
          alt="HTML"
        />
      </li>
      <li>
        <Image
          src={JavaScript}
          width={60}
          height={60}
          alt="JavaScript"
        />
      </li>
      <li>
        <Image
          src={TypeScript}
          width={60}
          height={60}
          alt="TypeScript"
        />
      </li>
      <li>
        <Image
          src={ReactSvg}
          width={60}
          height={60}
          alt="React"
        />
      </li>
      <li>
        <Image
          src={Vue}
          width={60}
          height={60}
          alt="Vue"
        />
      </li>
      <li>
        <Image
          src={CSS}
          width={60}
          height={60}
          alt="CSS"
        />
      </li>
      <li>
        <Image
          src={Sass}
          width={60}
          height={60}
          alt="Sass"
        />
      </li>
      <li>
        <Image
          src={TailwindCSS}
          width={60}
          height={60}
          alt="TailwindCSS"
        />
      </li>
      <li>
        <Image
          src={Bootstrap}
          width={60}
          height={60}
          alt="Bootstrap"
        />
      </li>
      {/* <li>
          <Image
            src={Python}
            width={60}
            height={60}
            alt="Python"
          />
        </li>
        <li>
          <Image
            src={Django}
            width={60}
            height={60}
            alt="Django"
          />
        </li>
        <li>
          <Image
            src={SQLite}
            width={60}
            height={60}
            alt="SQLite"
          />
        </li> */}
      <li>
        <Image
          src={Git}
          width={60}
          height={60}
          alt="Git"
        />
      </li>
      <li>
        <Image
          src={Figma}
          width={60}
          height={60}
          alt="Figma"
        />
      </li>
    </ul>
  );
}
