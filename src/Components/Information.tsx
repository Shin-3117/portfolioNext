"use client";

import Image from "next/image";
import ID_Photo from "../img/증명사진.png";
import PhoneIcon from "@mui/icons-material/PermPhoneMsg";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Information() {
  const doCopy = (text: string) => {
    // 흐음 1.
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("클립보드에 복사되었습니다.");
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      // 흐름 2.
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }
    }
  };

  return (
    <article className="rounded-2xl overflow-hidden animate-fade-right animate-delay-500">
      <div className="sm:flex ">
        <div className="bg-stone-100  p-5 center">
          <Image
            src={ID_Photo}
            alt="증명사진"
            width={200}
            height={267}
            placeholder="blur"
          />
        </div>
        <div className="text-lg grow">
          <ul
            className="bg-stone-100 leading-relaxed
            p-5 flex flex-col justify-center h-full md:rounded-tr-2xl"
          >
            <li className="hover:bg-stone-300">
              이름: 신현중 | HyeonJung Shin | 申鉉中
            </li>
            <li className="hover:bg-stone-300">생년월일 : 1997.03.28</li>
            <li className="hover:bg-stone-300">최종학력 : 부산대학교</li>
            <li className="hover:bg-stone-300">
              경력사항 : 매그나칩반도체 (7개월 : 22.06~22.12)
            </li>
            <li>
              교육이수 :
              <ul className="pl-2 leading-none">
                <li className="hover:bg-stone-300 py-1">
                  <p className="text-base">
                    23.01.11~23.04.28 (600시간) | 코드스테이츠
                  </p>
                  <p>경상남도 ABC-Lab 웹프론트엔드 개발자 부트캠프 </p>
                </li>
                <li className="hover:bg-stone-300 py-1">
                  <p className="text-base">
                    23.07.05~23.11.24 (800시간) | 삼성 청년 SW 아카데미
                  </p>
                  <p>삼성 청년 SW아카데미 1학기 코딩 집중과정</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-stone-200 p-5">
        <ul className="md:flex justify-between gap-3">
          <li
            className="cursor-pointer hover:bg-stone-300"
            onClick={() => doCopy("010-8662-3117")}
          >
            <PhoneIcon /> 010-8662-3117
          </li>
          <li
            className="cursor-pointer hover:bg-stone-300"
            onClick={() => doCopy("tlswnd3127@gmail.com")}
          >
            <EmailIcon /> tlswnd3127@gmail.com
          </li>
          <li className="hover:bg-stone-300">
            <a href="https://github.com/Shin-3117" target="_blank">
              <GitHubIcon /> https://github.com/Shin-3117
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
