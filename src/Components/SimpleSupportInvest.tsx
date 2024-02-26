import Image from "next/image";
import projectImg from "../img/projects/SSI.png";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import GitHubIcon from "@mui/icons-material/GitHub";
import HTML from "../img/skills/HTML.svg";
import JavaScript from "../img/skills/JavaScript.svg";
import Vue from "../img/skills/Vue.svg";
import CSS from "../img/skills/CSS.svg";
import TailwindCSS from "../img/skills/TailwindCSS-Dark.svg";
import Python from "../img/skills/Python-Dark.svg";
import Django from "../img/skills/Django.svg";
import SQLite from "../img/skills/SQLite.svg";
export default function SSI() {
  return (
    <article className="p-4 m-4 bg-stone-50 rounded-2xl w-[90vw] max-w-[1200px]">
      <section>
        <div className="relative mb-4">
          <h3 className="text-center text-2xl font-bold">
            Simple Support INVEST
          </h3>
          <a
            className="btn absolute right-0 top-0"
            href="https://github.com/Shin-3117/SSAFY_Team_Project"
            target="_blank"
            rel="noreferrer noopener"
          >
            프로젝트
            <GitHubIcon />
          </a>
        </div>
        <div className="center flex-col">
          <Image src={projectImg} width={600} alt="프로젝트 전체화면" />
          <p>투자를 위한 종합 정보 제공 사이트입니다. 2인 팀프로젝트입니다.</p>
          <ul className="flex gap-2 p-2">
            <li>
              <Image src={HTML} width={50} height={50} alt="HTML" />
            </li>
            <li>
              <Image src={JavaScript} width={50} height={50} alt="JavaScript" />
            </li>
            <li>
              <Image src={Vue} width={50} height={50} alt="Vue" />
            </li>
            <li>
              <Image src={CSS} width={50} height={50} alt="CSS" />
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
              <Image src={Python} width={50} height={50} alt="Python" />
            </li>
            <li>
              <Image src={Django} width={50} height={50} alt="Django" />
            </li>
            <li>
              <Image src={SQLite} width={50} height={50} alt="SQLite" />
            </li>
          </ul>
        </div>
      </section>
      <section className="p-4">
        <section>
          <h4>
            <LightbulbIcon />
            Learning Point
          </h4>
          <ul className="mb-2">
            <li className="pb-1">
              <h5>Vue3 사용법 숙지</h5>
              <p>
                - react는 jsx문법으로 작성하는 반면, Vue는 .vue 파일에서
                template, script, style 태그로 HTML, JS, CSS를 처리하는 방식이
                였습니다.
              </p>
              <p>
                - 두 라이브러리 모두 SPA, 가상 돔을 사용하기 때문에 유사하다는
                느낌을 많이 받았습니다.
              </p>
            </li>
            <li>
              <h5>tailwindCSS 사용법 숙지</h5>
              <p>
                - class Name을 지정하고, CSS 파일에서 class에 css를 적용하는
                과정이 축소되서 편했습니다.
              </p>
              <p>
                - className에 Utility class 만 입력하여 CSS 적용이 되서
                편했습니다.
              </p>
            </li>
            <li>
              <h5>Django 사용법 숙지</h5>
              <p>
                - 해당 url로 접근하면 urls.py ⮕ views.py (⬌ models.py) ⮕ 응답
                하는 방식으로 동작했습니다.
              </p>
              <p>- Django는 DB 테이블 정의 및 조작하는 기능도 제공했습니다.</p>
              <p>1. models.py에 class로 정의하고</p>
              <p>
                2. <code>python manage.py makemigrations</code> 명령어로 DB
                Table을 구성하고
              </p>
              <p>
                3. <code>python manage.py migrate</code> 명령어로 DB에 반영이
                가능했습니다.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h4>
            <TroubleshootIcon />
            Trouble Shooting
          </h4>
          <ul className="mb-2">
            <li className="pb-1">
              <h5>서버 캐싱으로 인한 서버 데이터 최신화 불가능</h5>
              <p>
                - 즐겨찾기 기능 구현 중, 즐겨찾기에 대한 데이터가 서버에
                기록되었으나, 프론트엔드에서 다시 데이터 요청시 변경사항
                미적용된 데이터가 돌아옴
              </p>
              <p>
                - 서버 캐싱 설정으로 인한 문제로, 캐싱을 해제하는 토큰을 요청을
                header에 포함하여 해결
              </p>
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
}
/**
이력서는 본인의 역량과 성장 가능성을 구체적으로 알아볼 수 있는 자료로 자유롭게 작성해주세요. 
다만, 그동안 무수히 경험한 순간들을 단순히 나열하기보다는, 
경험 속에서의 임팩트와 러닝 포인트를 구체적으로 작성해 주시는 것이 좋아요! 
물론 실패를 경험한 순간을 작성해 주셔도 좋아요. 
스스로 해결하기 위해 노력 / 개선한 사항이 있다면 충분히 매력적이에요.
 */
