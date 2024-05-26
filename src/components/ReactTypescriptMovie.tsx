import Image from "next/image";
import projectImg from "@/img/projects/TRM.png";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import GitHubIcon from "@mui/icons-material/GitHub";
import HTML from "@/img/skills/HTML.svg";
import JavaScript from "@/img/skills/JavaScript.svg";
import TypeScript from "@/img/skills/TypeScript.svg";
import ReactSvg from "@/img/skills/React.svg";
import CSS from "@/img/skills/CSS.svg";
import Sass from "@/img/skills/Sass.svg";
export default function ReactTypescriptMovie() {
  return (
    <article className="p-4 m-4 bg-stone-50 rounded-2xl w-[90vw] max-w-[1200px]">
      <section>
        <div className="relative mb-4">
          <h3 className="text-center text-2xl font-bold">
            React-Typescript_Movie
          </h3>
          <a
            className="btn absolute right-0 top-0"
            href="https://github.com/Shin-3117/React-Typescript_Movie"
            target="_blank"
            rel="noreferrer noopener"
          >
            프로젝트
            <GitHubIcon />
          </a>
        </div>
        <div className="center flex-col">
          <Image
            src={projectImg}
            width={600}
            alt="프로젝트 전체화면"
          />
          <p>
            Typescrip, React로 만든 영화
            사이트 입니다.
          </p>
          <ul className="flex gap-2 p-2">
            <li>
              <Image
                src={HTML}
                width={50}
                height={50}
                alt="HTML"
              />
            </li>
            <li>
              <Image
                src={JavaScript}
                width={50}
                height={50}
                alt="JavaScript"
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
                src={ReactSvg}
                width={50}
                height={50}
                alt="React"
              />
            </li>
            <li>
              <Image
                src={CSS}
                width={50}
                height={50}
                alt="CSS"
              />
            </li>
            <li>
              <Image
                src={Sass}
                width={50}
                height={50}
                alt="Sass"
              />
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
              <h5>
                TypeScript 사용법 숙지
              </h5>
              <p>
                - TypeScript를 통해
                사전에 error를 방지 할
                수 있었습니다.
              </p>
              <p>
                - interface를 정의하여
                axios의 response의 data
                타입을 정의할 수
                있었습니다.
              </p>
            </li>
            <li>
              <h5>
                마우스 hover시 CSS 적용
                및 버튼 클릭으로 상세
                페이지 출력
              </h5>
              <p>
                - 영화포스터 단위로
                컴포넌트를 분리하여
                작업을 진행했습니다.
              </p>
              <p>
                - 마우스 hover시, 영화
                포스터 위에 영화 제목,
                평점, 더보기 버튼을
                출력하게 구현했습니다.
              </p>
              <p>
                - 출력된 모달은 모달창
                내용 컨테이너 밖을
                클릭하면 닫히도록
                구현했습니다.
              </p>
            </li>
            <li>
              <h5>스크롤바 CSS 적용</h5>
              <p>
                -{" "}
                <code>
                  ::-webkit-scrollbar
                </code>
                를 이용해 스크롤바를
                커스텀했습니다.
              </p>
              <p>
                - Sass에서 색상을 사정에
                정의하여 관리의 편의성을
                높였습니다.
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
              <h5>
                영화 데이터 API 사이트의
                API Key오류
              </h5>
              <p>
                - Access Token Auth와
                API Key Auth 두 가지
                종류가 있었고 종류를
                변경하여 해결하였습니다.
              </p>
            </li>
            <li className="pb-1">
              <h5>
                모달창 내용 컨테이너를
                클릭해도 모달이 닫히는
                버그
              </h5>
              <p>
                - 확인 결과 버블링으로
                인해 상위 태그의
                모달찰을 닫는 함수가
                실행됨
              </p>
              <p>
                -{" "}
                <code>{`onClick={(e) => e.stopPropagation()}>`}</code>
                를 통해 버블링 방지
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
