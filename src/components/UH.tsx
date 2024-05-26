import Image from "next/image";
import projectImg from "@/img/projects/UH/StartPage.gif";
import waitingRoomImg from "@/img/projects/UH/대기방.gif";
import game101Img0 from "@/img/projects/UH/고요속의외침_설명.gif";
import game101Img1 from "@/img/projects/UH/아이템_STT.gif";
import game102Img0 from "@/img/projects/UH/인물맞추기_설명.gif";
import game102Img1 from "@/img/projects/UH/인물맞추기.gif";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import GitHubIcon from "@mui/icons-material/GitHub";
import HTML from "@/img/skills/HTML.svg";
import JavaScript from "@/img/skills/JavaScript.svg";
import ReactSvg from "@/img/skills/React.svg";
import CSS from "@/img/skills/CSS.svg";
import TailwindCSS from "@/img/skills/TailwindCSS-Dark.svg";
export default function UH() {
  return (
    <article className="p-4 m-4 bg-stone-100 rounded-2xl w-[90vw] max-w-[1200px]">
      <section>
        <div className="relative mb-4">
          <h3 className="text-center text-2xl font-bold">
            UH!?
          </h3>
          <a
            className="btn absolute right-0 top-0"
            href="https://github.com/Shin-3117/UH"
            target="_blank"
            rel="noreferrer noopener"
          >
            프로젝트
            <GitHubIcon />
          </a>
        </div>
        <div className="center flex-col">
          <div className="flex">
            <div className="w-1/2 max-w-[560px]">
              <Image
                src={projectImg}
                alt="UH시작화면"
              />
            </div>
            <div className="w-1/2 max-w-[560px]">
              <Image
                src={game102Img1}
                alt="게임:인물맞추기"
              />
            </div>
          </div>
          <p>
            UH!?는 WebRTC를 이용한
            온라인 예능 게임
            플래폼입니다. 6인 팀
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
                src={TailwindCSS}
                width={50}
                height={50}
                alt="TailwindCSS"
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
                <h5>
                  WebRTC 라이브러리를
                  이용한 통신 연결
                </h5>
                <p>
                  - OpenVidu
                  라이브러리를 활용하여
                  유저 간의 통신을
                  구현했습니다.
                </p>
              </li>

              <li className="pb-1">
                <h5>
                  게임 대기방 페이지
                  제작
                </h5>
                <div className="w-1/2 max-w-[560px]">
                  <Image
                    src={waitingRoomImg}
                    alt="게임대기방"
                  />
                </div>
                <p>
                  1. 참여한 유저 비디오
                  출력
                </p>
                <p>
                  - 대기방 입장시에
                  유저의 MediaStream을
                  session에 등록 및
                  관리하여 구연했습니다.
                </p>
                <p>
                  2. 오디오, 비디오
                  on/off 기능 구현
                </p>
                <p>
                  - MediaStream으로
                  오디오, 비디오를
                  관리하고, socket으로
                  변경사항을 다른
                  유저에게 알림니다.
                </p>
                <p>
                  3. 대기방 채팅 구현
                </p>
                <p>
                  - session에 있는
                  socket을 이용하여 유저
                  간의 통신을 통해
                  채팅을 구연했습니다.
                </p>
                <p>
                  4. 팀 변경, 준비 /
                  게임시작 구현
                </p>
                <p>
                  - 유저의 팀, 준비여부,
                  게임 종류, 게임 시작
                  여부는 서버에서
                  관리합니다.
                </p>
                <p>
                  - 팀 변경, 준비 시
                  서버에 요청을 보내고,
                  socket으로 유저의
                  상태를 다른 유저에게
                  알림니다.
                </p>
                <p>
                  - 게임 시작시,
                  서버에서 유저들의
                  팀정보와 게임 정보를
                  가져옵니다.
                </p>
              </li>
              <li className="pb-1">
                <h5>
                  게임: 고요 속의 침묵
                  제작
                </h5>
                <div className="flex">
                  <div className="w-1/2 max-w-[560px]">
                    <Image
                      src={game101Img0}
                      alt="게임:고요속의외침 설명"
                    />
                  </div>
                  <div className="w-1/2 max-w-[560px]">
                    <Image
                      src={game101Img1}
                      alt="게임:고요속의외침"
                    />
                  </div>
                </div>
                <p>
                  - 팀별로 진행하고,
                  팀과 팀 인덱스를 통해
                  발화자를 지정합니다.
                </p>
                <p>
                  - 상대편인 경우 정답이
                  보이고, 같은팀은
                  정답이 보이지 않고
                  채팅창으로 정답을
                  맞춰야합니다.
                </p>
                <p>
                  - 채팅은 socket으로
                  구현하였으며, 팀 정보,
                  문제 정보, 정답,
                  닉네임의 정보를
                  통신합니다.
                </p>
                <p>
                  - 팀인원이 채팅으로
                  정답을 입력하면 팀
                  점수가 증가하고,
                  문제가 넘어가고,
                  발화자가 변경됩니다.
                </p>
                <p>
                  - 타이머는{" "}
                  <code>useRef()</code>,{" "}
                  <code>
                    useState()
                  </code>
                  ,
                  <code>
                    useEffect()
                  </code>
                  ,{" "}
                  <code>
                    Date.now()
                  </code>
                  와 meter tag를
                  사용하여
                  구연하였습니다.
                </p>
                <p>
                  --{" "}
                  <code>useRef()</code>
                  로{" "}
                  <code>
                    Date.now()
                  </code>
                  를 통해 타이머 시작
                  시간과 현재 시간을
                  비교하여 시간을
                  측정합니다.
                </p>
                <p>
                  --{" "}
                  <code>useRef()</code>
                  와{" "}
                  <code>
                    useEffect()
                  </code>
                  를 통해
                  <code>
                    setInterval()
                  </code>{" "}
                  기능을 하는 커스텀 훅
                  <code>
                    useInterval()
                  </code>
                  을 만들어
                  반복실행합니다.
                </p>
                <p>
                  -- 제한 시간을 넘기면,
                  라운드를 증가하고, 팀
                  변경 및 문제를
                  변경합니다.
                </p>
                <p>
                  - 설정한 라운드를
                  넘어가면 게임을
                  종료합니다.
                </p>
                <p>
                  - 게임 종료시, 게임
                  결과를 서버로 보내고,
                  대기방으로 돌아갑니다.
                </p>
              </li>
              <li className="pb-1">
                <h5>
                  게임: 인물 맞추기
                </h5>
                <div className="flex">
                  <div className="w-1/2 max-w-[560px]">
                    <Image
                      src={game102Img0}
                      alt="게임:인물맞추기 설명"
                    />
                  </div>
                  <div className="w-1/2 max-w-[560px]">
                    <Image
                      src={game102Img1}
                      alt="게임:인물맞추기"
                    />
                  </div>
                </div>
                <p>
                  - 채팅은 socket으로
                  구현하였으며, 팀 정보,
                  문제 정보, 정답,
                  닉네임의 정보를
                  통신합니다.
                </p>
                <p>
                  - 채팅으로 정답을
                  입력하면 맞춘 사람의
                  팀 점수가 증가하고,
                  문제가 넘어갑니다.
                </p>
                <p>
                  - 타이머는 위와 같은
                  방식으로 구현했으며,
                  턴 타이머(7초), 전체
                  타이머가 있습니다.
                </p>
                <p>
                  -- 턴 타이머는 문제를
                  변경하며, 전체
                  타이머는 게임을
                  종료시킵니다.
                </p>
                <p>
                  - 게임 종료시, 게임
                  결과를 서버로 보내고,
                  대기방으로 돌아갑니다.
                </p>
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
                  OpenVidu의 예제코드와
                  사용 react버전이 다름
                </h5>
                <p>
                  - 예제코드가 react
                  16버전, Class
                  Component으로
                  적혀있었습니다.
                </p>
                <p>
                  - react 18버전을 사용
                  중이였고 Function
                  Component를 사용할
                  예정이였습니다.
                </p>
                <p>
                  - Class Component로
                  작성하다가 예제코드를
                  Function Component으로
                  변경된 코드를 찾아
                  적용했습니다.
                </p>
              </li>
              <li className="pb-1">
                <h5>
                  연결된 각 브라우저별로
                  문제 화면이 달라지는
                  버그
                </h5>
                <p>
                  - 각 유저의
                  브라우저에서
                  정답처리가 달라져
                  발생하는 문제였습니다.
                </p>
                <p>
                  - 채팅시 socket에 문제
                  정보와 정답 정보를
                  추가하여 통신을 하여
                  해결했습니다.
                </p>
              </li>
              <li className="pb-1">
                <h5>
                  연결된 각 브라우저별로
                  게임 시간이 달라지는
                  버그
                </h5>
                <p>
                  <code>
                    setInterval()
                  </code>
                  로 구현을 했을 때
                  발생한 문제였습니다.
                </p>
                <p>
                  1. 리렌더링이
                  일어나면, 시간이
                  초기화 되거나
                </p>
                <p>
                  2. delay 시간이 보장이
                  되지 않아 유저별 시간
                  차이가 발생했습니다.
                </p>
                <p>
                  - 이를 반장의 시간을
                  socket으로 통신하여
                  해결하려 했지만 무한
                  루프로 오류가
                  발생했습니다.
                </p>
                <p>
                  - 이를 해결하기 위해,{" "}
                  <code>
                    useInterval()
                  </code>{" "}
                  이라는 커스텀 훅을
                  발견하고 사용했습니다.
                </p>
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
