import React from "react";
import type { ChampionDetail } from "../../types/Champion";
import Image from "next/image";
import { RiotChampionDetailPageImageLink } from "../../components/imageLink";
import Link from "next/link";

interface ChampionIdProps {
  params: { id: string };
}

const Champions = async ({ params }: ChampionIdProps) => {
  // API 호출로 데이터 가져오기
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${params.id}.json`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) throw new Error("Champion 데이터 가져오기 실패");

  const champion = await res.json();
  const championDetail: ChampionDetail[] = Object.values(champion.data);

  if (!championDetail) throw new Error("Champion 데이터 가져오기 실패");

  return (
    <div className="text-white relative">
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
              className="absolute top-0 left-0 w-full min-h-fit z-0 opacity-50"
            />
            <div className="z-10">
              <Link href={"/champions"}>뒤로 가기</Link>
              <h1>{champion.title}</h1>
              <p>{champion.lore}</p>
              <div>
                <p>공격력: {champion.info?.attack}</p>
                <p>방어력: {champion.info?.defense}</p>
                <p>난이도: {champion.info?.difficulty}</p>
                <p>마력: {champion.info?.magic}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Champions;
