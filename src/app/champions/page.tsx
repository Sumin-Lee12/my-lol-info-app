"use client";

import React, { useState, useEffect } from "react";
import type { Champion } from "../types/Champion";
import Image from "next/image";
import { RiotChampionImageLink } from "../components/imageLink";

export default function ItemPage() {
  const [data, setData] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchChampions = async () => {
      const res = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
      );
      const json = await res.json();
      const data: Champion[] = Object.values(json.data);
      setData(data);
    };
    fetchChampions();
  }, []);

  return (
    <div className="min-h-screen w-full justify-items-center mx-5">
      <h1 className="font-bold text-[32px] my-20">챔피언 목록</h1>
      <div className="min-h-screen w-full grid grid-cols-4 justify-items-center gap-5">
        {data.map((champion) => (
          <div
            key={champion.id}
            className="flex flex-col justify-center items-center w-full h-[300px] border-gray-600 border rounded-lg"
          >
            <Image
              src={`${RiotChampionImageLink}${champion.image.full}`}
              alt={champion?.image?.full}
              width={champion?.image?.w}
              height={champion?.image?.h}
            />
            <h3 className="font-bold text-[32px]">{champion.name}</h3>
            <p>{champion.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
