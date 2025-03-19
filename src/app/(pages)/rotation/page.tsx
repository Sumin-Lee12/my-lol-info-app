"use client";

import React, { useState, useEffect } from "react";
import type { ChampionDetail } from "../../types/Champion";
import { fetchAllChampionList } from "../../utils/serverApi";
import Card from "../../components/card";

export default function ChampionPage() {
  const [freeChampions, setFreeChampions] = useState<ChampionDetail[]>([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

    const fetchFreeChampions = async () => {
      const res = await fetch(
        `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`
      );
      const data = await res.json();
      const freeChampionKeys: number[] = data.freeChampionIds;
      const allChampionList = await fetchAllChampionList();

      const { data: championsData } = allChampionList;
      const championsArray: ChampionDetail[] = Object.values(championsData);

      const availableChampions = championsArray.filter((champion) =>
        freeChampionKeys.includes(Number(champion.key))
      );
      console.log("freeChampions", availableChampions);
      setFreeChampions(availableChampions);
    };
    fetchFreeChampions();
  }, []);
  if (Math.random() > 0.5) throw new Error("오류다오류!");

  return (
    <div className="min-h-screen w-full justify-items-center mx-5">
      <h1 className="font-bold text-[32px] my-20 text-white">챔피언 목록</h1>
      <div className="min-h-screen w-full grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 justify-items-center gap-10">
        <Card championDetail={freeChampions} />
      </div>
    </div>
  );
}
