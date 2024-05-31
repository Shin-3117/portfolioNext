import Image from "next/image";
import Logo from "@/img/projects/COA/logo.svg";
import TextLogo from "@/img/projects/COA/TextLogo.svg";
import Skills from "./../Info/Skills";
import Next from "@/img/skills/Next.svg";
import TypeScript from "@/img/skills/TypeScript.svg";
import TailwindCSS from "@/img/skills/TailwindCSS-Dark.svg";
import D3 from "@/img/skills/D3.svg";
import Jira from "@/img/skills/Jira.svg";
import architecture from "@/img/projects/COA/아키텍쳐.png";
import componentDiagram from "@/img/projects/COA/컴포넌트구조도.webp";
import contributionChart from "@/img/projects/COA/잔디-total.webp";
import LOC from "@/img/projects/COA/사용언어통계.webp";
import history from "@/img/projects/COA/연혁차트.webp";
import radar from "@/img/projects/COA/심층분석차트.webp";
import BarChartRace from "@/img/projects/COA/BarChartRace.gif";

export default function COA() {
  return (
    <article className="border m-4 p-4 flex">
      <section className="flex flex-col gap-2 w-1/2">
        <div className="flex gap-2 items-end">
          <h3 className="text-4xl">
            COA
          </h3>
          <p>
            커밋 기반 프로젝트 기여도
            분석 사이트
          </p>
        </div>
        <p>2024.04 ~ 2024.05</p>
        <p>
          팀구성 - BE 2명, FE 3명, AI
          1명
        </p>
        <p>역할 - 프론트엔드</p>
        <div>
          <ul className="flex gap-2 p-2">
            <li>
              <Image
                src={Next}
                width={50}
                height={50}
                alt="Next"
              />
            </li>
            <li>
              <Image
                src={TypeScript}
                width={50}
                height={50}
                alt="TypeScript"
              />
            </li>
            <li>
              <Image
                src={TailwindCSS}
                width={50}
                height={50}
                alt="TailwindCSS"
              />
            </li>
            <li>
              <Image
                src={D3}
                width={50}
                height={50}
                alt="D3"
              />
            </li>
            <li>
              <Image
                src={Jira}
                width={50}
                height={50}
                alt="Jira"
              />
            </li>
          </ul>
        </div>

        <ul className="flex flex-col gap-2">
          <h4>구현 사항</h4>
          <h5>
            마이페이지, 알림 페이지,
            로그인 페이지, 연동 페이지
          </h5>
          <ul className="flex flex-col gap-1">
            <h5>데이터 시각화</h5>
            <li>
              - 깃허브, 깃랩 통합
              Contribution 차트 컴포넌트
              제작
              <Image
                src={contributionChart}
                alt="contributionChart"
              />
            </li>
            <li>
              - 사용언어 통계 차트 제작
              <Image
                src={LOC}
                alt="LOC"
              />
            </li>
            <li>
              - 프로젝트 기간 차트 제작
              <Image
                src={history}
                alt="history"
              />
            </li>
            <li>
              - 분석결과 점수 Radar 차트
              제작
              <Image
                src={radar}
                alt="radar"
              />
            </li>
            <li>
              - 사용 언어 통계 bar chart
              race 제작
              <Image
                src={BarChartRace}
                alt="BarChartRace"
              />
            </li>
          </ul>
        </ul>
      </section>
      <section className="flex flex-col gap-2 w-1/2">
        <Image
          src={architecture}
          alt="architecture"
        />
        <Image
          src={componentDiagram}
          alt="componentDiagram"
        />
      </section>
    </article>
  );
}
