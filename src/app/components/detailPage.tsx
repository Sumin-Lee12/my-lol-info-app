import { ChampionDetail } from "../types/Champion";
import Image from "next/image";
import { RiotChampionDetailPageImageLink } from "./imageLink";
import Link from "next/link";

const ChampionDetailPage = ({
  championDetail,
}: {
  championDetail: ChampionDetail[];
}) => {
  return (
    <>
      {championDetail.map((champion) => {
        return (
          <div
            key={champion.id}
            className="relative min-h-screen flex flex-col justify-center items-center"
          >
            <Image
              src={`${RiotChampionDetailPageImageLink}${champion.id}_0.jpg`}
              alt={champion.image.full}
              width={1500}
              height={800}
              className="absolute top-0 left-0 w-full min-h-fit z-0 opacity-60"
            />
            <div className="z-10 relative min-h-screen m-10">
              <button className="py-2 px-3 rounded-md hover:bg-gray-500 text-sm">
                <Link href={"/champions"}>뒤로 가기</Link>
              </button>
              <h1 className="text-[50px] font-black mt-32">{champion.id}</h1>
              <h2 className="text-[32px] font-thin">{champion.title}</h2>
              <p className="w-1/2 mt-8">{champion.lore}</p>
              <div className="flex flex-row mt-16 gap-10">
                <p>공격력: {champion.info?.attack}</p>
                <p>방어력: {champion.info?.defense}</p>
                <p>난이도: {champion.info?.difficulty}</p>
                <p>마력: {champion.info?.magic}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChampionDetailPage;
