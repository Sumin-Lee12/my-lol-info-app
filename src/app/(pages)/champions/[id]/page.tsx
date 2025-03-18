import React from "react";
import type { ChampionDetail } from "../../../types/Champion";
import { ChampionIdProps } from "../../../utils/fetch";
import { fetchWithDelay } from "../../../utils/fetch";
import ChampionDetailPage from "../../../components/detailPage";
import { Suspense } from "react";
import Loading from "../../loading";

const Champions = async ({ params }: ChampionIdProps) => {
  const res = await fetchWithDelay(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${params.id}.json`,
    3000
  );

  if (!res.ok) throw new Error("Champion 데이터 가져오기 실패");

  const champion = await res.json();
  const championDetail: ChampionDetail[] = Object.values(champion.data);

  if (!championDetail) throw new Error("Champion 데이터 가져오기 실패");

  return (
    <div className="text-white relative">
      <Suspense fallback={<Loading />}>
        <ChampionDetailPage championDetail={championDetail} />
      </Suspense>
    </div>
  );
};

export default Champions;
