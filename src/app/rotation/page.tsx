"use client";

import React, { useState, useEffect } from "react";
import type { ChampionDetailType } from "../types/Champion";
import Image from "next/image";
import { RiotChampionCardImageLink } from "../components/imageLink";
import Link from "next/link";
import { fetchAllChampionList } from "../utils/serverApi";

export default function ChampionPage() {
  const [freeChampions, setFreeChampions] = useState<ChampionDetailType[]>([]);

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
      const championsArray: ChampionDetailType[] = Object.values(championsData);

      const availableChampions = championsArray.filter((champion) =>
        freeChampionKeys.includes(Number(champion.key))
      );
      console.log("freeChampions", availableChampions);
      setFreeChampions(availableChampions);
    };
    fetchFreeChampions();
  }, []);

  return (
    <div className="min-h-screen w-full justify-items-center mx-5">
      <h1 className="font-bold text-[32px] my-20 text-white">챔피언 목록</h1>
      <div className="min-h-screen w-full grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 justify-items-center gap-5">
        {freeChampions.map((champion) => (
          <div
            key={champion.id}
            className="flex justify-center items-center w-full h-[500px] border-gray-700 border-2 rounded-lg"
          >
            <Link href={`/champions/${champion.id}`} className="w-full">
              <div className="w-full h-[500px] flex flex-col justify-center items-center overflow-hidden">
                <div className="h-[100%]">
                  <Image
                    src={`${RiotChampionCardImageLink}${champion.id}_0.jpg`}
                    alt={champion?.image?.full}
                    width={`250`}
                    height={`250`}
                  />
                </div>
                <h3 className="font-bold text-[32px] text-white mt-5">
                  {champion.name}
                </h3>
                <p className="text-gray-500">{champion.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
