import Image from "next/image";
import ID_Photo from "@/img/증명사진.png";
import HistoryChart from "./HistoryChart";
export default function MyInfo() {
  const li_p_CSS = "text-2xl";
  return (
    <div className="flex flex-col gap-5 ">
      <h2 className="text-6xl">
        INFORMATION
      </h2>
      <ul className="flex flex-col md:flex-row md:gap-10 gap-4">
        <li>
          <h3 className="text-3xl">
            NAME
          </h3>
          <p className={li_p_CSS}>
            신현중 / HyeonJung Shin
          </p>
        </li>
        <li>
          <h3 className="text-3xl">
            BIRTH
          </h3>
          <p className={li_p_CSS}>
            1997.03.28
          </p>
        </li>
      </ul>
      <div className='w-full'>
        <h3 className="text-3xl">
          EDUCATION
        </h3>
        <HistoryChart />
      </div>
      <div>
        <h3 className="text-3xl">
          EXPERIENCE
        </h3>
        <ul className="flex flex-col gap-1 pt-1">
          <li>
            2024.05.24 삼성 청년
            SW아카데미 자율프로젝트
            우수상
          </li>
          <li>
            2024.03.03 삼성 청년
            SW아카데미 공통프로젝트
            우수상
          </li>
          <li>
            2021.09.03
            광메카트로닉스공학과 Makers
            Lab 최우수상
          </li>
        </ul>
      </div>
    </div>
  );
}
