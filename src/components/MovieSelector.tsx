import Image from "next/image";
import projectImg from "@/img/projects/MovieSelector/home.png";
import LayoutImg from "@/img/projects/MovieSelector/Layout.png";
import AuthImg from "@/img/projects/MovieSelector/Auth.png";
import BackOfficePageImg from "@/img/projects/MovieSelector/BackOfficePage.png";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import GitHubIcon from "@mui/icons-material/GitHub";
import HTML from "@/img/skills/HTML.svg";
import JavaScript from "@/img/skills/JavaScript.svg";
import ReactSvg from "@/img/skills/React.svg";
import CSS from "@/img/skills/CSS.svg";
import Sass from "@/img/skills/Sass.svg";

export default function MovieSelector() {
  return (
    <article className="p-4 m-4 bg-stone-100 rounded-2xl w-[90vw] max-w-[1200px]">
      <section>
        <div className="relative mb-4">
          <h3 className="text-center text-2xl font-bold">
            MovieSelector
          </h3>
          <a
            className="btn absolute right-0 top-0"
            href="https://github.com/Shin-3117/select_movie"
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
            alt="UH시작화면"
          />

          <p>
            애정하는 영화 리뷰 및 평점
            등록 사이트입니다. 4인 팀
            프로젝트입니다.
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
      <section className="center flex-col p-4">
        <div>
          <section>
            <h4>
              <LightbulbIcon />
              Learning Point
            </h4>
            <ul className="mb-2">
              <li className="pb-1">
                <h5>Layout 제작</h5>
                <div className="lg:flex">
                  <Image
                    src={LayoutImg}
                    width={500}
                    alt="Project Layout"
                  />
                  <div>
                    <p>
                      - Create React
                      App으로 프로젝트
                      세팅을 하고,
                      Route를 이용해
                      Layout을
                      구현했습니다.
                    </p>
                    <p>
                      - header, main,
                      footer로
                      분리했습니다.
                    </p>
                    <p>
                      -- header에는
                      로고, 검색창,
                      로그인 버튼,
                      마이페이지 버튼,
                      로그아웃 버튼이
                      있습니다.
                    </p>
                    <p>
                      -- footer에는
                      로고, 팀원, 깃허브
                      주소 등의 정보가
                      있습니다.
                    </p>
                  </div>
                </div>
              </li>

              <li className="pb-1">
                <h5>인증 기능 구현</h5>
                <div className="lg:flex">
                  <Image
                    src={AuthImg}
                    width={500}
                    alt="Project Layout"
                  />
                  <div>
                    <p>
                      - 로그인,
                      회원가입, 관리자
                      로그인, 관리자
                      회원가입을
                      구현했습니다.
                    </p>
                    <p>
                      - input에 유효성
                      검사를 적용하여,
                      부적합한 경우
                      에러메세지를
                      출력합니다.
                      <br /> 적합한
                      경우만 서버로
                      로그인 요청을
                      보냅니다.
                    </p>
                    <p>
                      -{" "}
                      <code>
                        useLocation()
                      </code>
                      를 사용하여 로그인
                      완료 후, 사용자가
                      보던 페이지로
                      이동시킵니다.
                    </p>
                    <p>
                      관리자 로그인의
                      경우는 로그인
                      성공시, 백오피스
                      페이지로
                      이동합니다.
                    </p>
                  </div>
                </div>
              </li>

              <li className="pb-1">
                <h5>
                  백오피스 페이지 제작
                </h5>
                <div className="lg:flex">
                  <Image
                    src={
                      BackOfficePageImg
                    }
                    width={500}
                    alt="Project Layout"
                  />
                  <div>
                    <p>
                      - 사이트에 등록된
                      영화, 유저, 댓글
                      관리가 가능합니다.
                    </p>
                    <p>
                      - 영화의 경우
                      CRUD에서 Delete는
                      불가능 합니다.
                      (백엔드에서 요청)
                    </p>
                    <p>
                      - 검색창을 통해
                      찾으려는 항목을
                      검색할 수
                      있습니다.
                    </p>
                    <p>
                      - 수정 버튼을
                      클릭하면, 모달창이
                      출력되고 내용
                      수정이 가능합니다.
                    </p>
                    <p>
                      - 삭제는
                      체크박스를 통해
                      일괄 삭제, 혹은
                      삭제 버튼을 통한
                      단일 데이터 삭제가
                      가능합니다.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section className="relative">
            <h4>
              <TroubleshootIcon />
              Trouble Shooting
            </h4>
            <ul className="mb-2">
              <li className="pb-1">
                <h5>
                  BackOffice Table
                </h5>
                <p>
                  - Table tag를 사용하려
                  했지만 SEO에
                  좋지않다는 강사님의
                  말에 따라 ul li 구조로
                  변경했습니다.
                </p>
                <p>
                  - CSS처리를 flex로
                  했을 때, li별 ui가
                  일치 하지 않아 grid를
                  사용해 구현했습니다.
                </p>
                <p>
                  - Sass를 통해 CSS의
                  분기처리를 통해
                  재사용성을 높였습니다.
                </p>

                <pre>
                  {`display: grid;
grid-template-columns: 40px 2fr 1fr 1fr 1fr;
&.users{
  grid-template-columns: 40px 2fr 2fr 1fr 1fr 1fr ;
}
&.Reviews {
  grid-template-columns: 40px 2fr 1fr 3fr 1fr 1fr;
}
`}
                </pre>
              </li>
            </ul>
          </section>
        </div>
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
