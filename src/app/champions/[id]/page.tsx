import React from "react";
import type { ChampionDetail } from "../../types/Champion";
import Image from "next/image";
import { RiotChampionImageLink } from "../../components/imageLink";

interface ChampionIdProps {
  params: { id: string };
}

const Champions = async ({ params }: ChampionIdProps) => {
  console.log("this is id!!!!! look here!!!!! htis!!!! here!!!!", params.id);

  // API 호출로 데이터 가져오기
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/en_US/champion/${params.id}.json`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) throw new Error("Champion 데이터 가져오기 실패");

  const champion = await res.json();
  const championDetail: ChampionDetail[] = Object.values(champion.data); // 객체를 배열로 변환
  console.log("thisis ChampiondEetail===>", championDetail);

  if (!championDetail) throw new Error("Champion 데이터 가져오기 실패");

  return (
    <div>
      <div>champions 상세</div>
      {championDetail.map((champion) => {
        return (
          <div key={champion.id}>
            <Image
              src={`${RiotChampionImageLink}${champion.image.full}`}
              alt={champion.image.full}
              width={300}
              height={300}
            />
            <h1>{champion.title}</h1>
            <p>{champion.lore}</p>
            <div>
              <p>{champion.info?.attack}</p>
              <p>{champion.info?.defense}</p>
              <p>{champion.info?.difficulty}</p>
              <p>{champion.info?.magic}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Champions;
