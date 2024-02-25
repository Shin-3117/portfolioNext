import Image from "next/image";
import projectImg from "../img/projects/JS_Shooting_game.gif";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function JsShootingGame() {
  return (
    <article className="p-4 m-4 bg-stone-100 rounded-2xl lg:flex w-[90vw]">
      <section>
        <div className="flex justify-between mb-4">
          <a
            className="btn "
            href="https://shin-3117.github.io/JS_Shooting_game/"
            target="_blank"
            rel="noreferrer noopener"
          >
            PLAY
          </a>

          <h3 className="text-center text-2xl font-bold">JS Shooting game</h3>
          <a
            className="btn "
            href="https://github.com/Shin-3117/JS_Shooting_game"
            target="_blank"
            rel="noreferrer noopener"
          >
            프로젝트
            <GitHubIcon />
          </a>
        </div>
        <div className="center flex-col">
          <Image src={projectImg} alt="슈팅게임이미지" />
          <p>
            HTML canvas 태그와 자바스크립트의 animate() 기능을 사용하여
            만들었습니다.
          </p>
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
              <h5>HTML canvas tag 와 JS animate() 활용하여 게임 구동</h5>
              <p>
                - animate() 함수를 통해 적생성, 총알생성, 충돌판정, 파편생성
                등을 처리했습니다.
              </p>
              <p>
                -- 적생성의 위치는 화면 밖에서, 점수에 비례해 생성 속도가
                빨라지도록 구현했습니다.
              </p>
              <p>
                -- 총알생성은 유저가 마우스를 클릭했을 때, 마우스 방향으로
                이동하도록 만들었습니다.
              </p>
              <p>
                -- 충돌판정은
                <code>(총알위치-적위치-총알반지름-적반지름) &gt; 0.1</code>을
                기준으로 했습니다.
              </p>
              <p>
                -- 파편생성은 적의 크기에 비례해 파편이 생성되고 랜덤한 방향으로
                튀도록 만들었습니다.
              </p>
            </li>
            <li className="pb-1">
              <h5>자바스크립트의 class 구문에 대한 활용</h5>
              <p>
                - 적, 총알, 파편 등을 class로 정의하고 인스턴스를 생성했습니다.
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
                시간 관리를 <code>setInterval()</code>에서을{" "}
                <code>let frame = 0</code>으로 처리
              </h5>
              <p>
                - 1초당 적생성 함수를 실행을 <code>setInterval()</code>함수로
                처리 했을 때, 브라우저 탭을 변경 후 돌아오면 적이 한번에
                생성되는 버그가 있었습니다.
              </p>
              <p>
                - 조사한 결과 <code>setInterval()</code>함수는 탭이 변경되도
                계속 실행되지만, <code>animate()</code>함수는 canvas를
                최신화하지 않아 발생하는 문제였습니다.
              </p>
              <p>
                - 이를 해결하기 위해 <code>let frame = 0</code>를 선언하고{" "}
                <code>animate()</code>함수가 실행될 때마다 frame을 1식 증가하고
                frame이 60이 되었을 때, 적생성 함수를 호출하도록 변경하였습니다.
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
