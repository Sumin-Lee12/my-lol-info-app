"use client";

import React, { useState, useEffect } from "react";
import type { ChampionDetail, ChampionDetailType } from "../types/Champion";
import { apiKey } from "../api/api-key";
import Image from "next/image";
import { RiotChampionCardImageLink } from "../components/imageLink";
import Link from "next/link";
import { fetchChampionList, fetchAllChampionList } from "../utils/serverApi";

// type championRotation = {
//   freeChampionIds: number[];
//   freeChampionIdsForNewPlayers: number[];
//   maxNewPlayerLevel: number;
// };

export default function ChampionPage() {
  const [freeChampionKeys, setFreeChampionKeys] = useState<number[]>([]);
  const [freeChampions, setFreeChampions] = useState<ChampionDetailType[]>([]);

  const apiKey = process.env.RIOT_API_KEY;

  useEffect(() => {
    const fetchFreeChampions = async () => {
      const res = await fetch(
        `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`
      );
      const data = await res.json();
      console.log("this is data", data);

      const freeChampionKeys: number[] = data.freeChampionIds;
      console.log("this is the FreeChampionKeys ==> ", freeChampionKeys);
      setFreeChampionKeys(freeChampionKeys);

      const allChampionList = await fetchAllChampionList();
      console.log("allChampionList==+>", allChampionList);

      const { data: championsData } = allChampionList;
      const championsArray: number[] = Object.values(championsData);

      const availableChampions = championsArray.filter((champion) =>
        freeChampionKeys.includes(Number(champion.key))
      );
      console.log("freeChampions", availableChampions);
      setFreeChampions(availableChampions);
    };
    fetchFreeChampions();
  }, []);

  //-----------
  // export default async function ChampionPage() {
  //   const res = await fetch(
  //     `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-6b9ebb19-f869-4831-a57c-fc17e7055dda`,
  //     {
  //       cache: "no-store",
  //     }
  //   );
  //   const championRotation = await res.json();

  //   const allChampionList = await fetchChampionList();

  //   const availableChampions: ChampionRotation[] = allChampionList.filter(
  //     (champion) => championRotation.freeChampionIds.includes(champion.id)
  //   );
  //   console.log("thsisi the available CHamptions====> ", availableChampions);
  //-------------

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
                <Image
                  src={`${RiotChampionCardImageLink}${champion.id}_0.jpg`}
                  alt={champion?.image?.full}
                  width={`200`}
                  height={`200`}
                />
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
