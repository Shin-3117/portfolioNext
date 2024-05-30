import Image from "next/image";
import Logo from "@/img/projects/COA/logo.svg";
import TextLogo from "@/img/projects/COA/TextLogo.svg";
import Skills from "./../Info/Skills";
import Next from "@/img/skills/Next.svg";
import TypeScript from "@/img/skills/TypeScript.svg";
import TailwindCSS from "@/img/skills/TailwindCSS-Dark.svg";
import D3 from "@/img/skills/D3.svg";
import Jira from "@/img/skills/Jira.svg";
export default function COA() {
  return (
    <article className="border m-4 p-4 flex flex-col gap-2">
      <div>
        <h3 className="text-4xl">
          COA
        </h3>
        <p>2024.04 ~ 2024.05</p>
      </div>
      <p>
        팀구성 - BE 2명, FE 3명, AI 1명
      </p>
      <p>역할 - 프론트엔드</p>
      <div>
        Skills :
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

      <ul className="flex flex-col gap-1">
        구현 사항
        <li>
          마이페이지, 알림 페이지,
          로그인 페이지, 연동 페이지
        </li>
        <ul>
          데이터 시각화
          <li>
            - 깃허브, 깃랩 통합
            Contribution 차트 컴포넌트
            제작
          </li>
          <li>
            - 사용언어 통계 차트 제작
          </li>
          <li>
            - 프로젝트 기간 차트 제작
          </li>
          <li>
            - 분석결과 점수 Radar 차트
            제작
          </li>
          <li>
            - 사용 언어 통계 bar chart
            race 제작
          </li>
        </ul>
      </ul>
      {/* <div className="flex items-center gap-1">
        <Image
          src={Logo}
          width={48}
          height={48}
          alt="COA Logo"
        />
        <Image
          src={TextLogo}
          width={102}
          height={32}
          alt="COA Logo"
        />
      </div> */}
    </article>
  );
}
