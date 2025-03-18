import type { Champion } from "../types/Champion";
import { Suspense } from "react";
import Loading from "./loading";
import Card from "../components/card";

export default async function ChampionPage() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const championList: Champion[] = Object.values(data.data);

  return (
    <div className="min-h-screen w-full justify-items-center mx-5">
      <h1 className="font-bold text-[32px] my-20 text-white">챔피언 목록</h1>
      <div className="min-h-screen w-full grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 justify-items-center gap-10">
        <Suspense fallback={<Loading />}>
          <Card championDetail={championList} />
        </Suspense>
      </div>
    </div>
  );
}
