"use client";

import React, { useState, useEffect } from "react";
import type { Champion } from "../types/Champion";
import Image from "next/image";
import { RiotChampionImageLink } from "../components/imageLink";
import Link from "next/link";

export default function ChampionPage() {
  const [data, setData] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchChampions = async () => {
      const res = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json", {
          next: {
            revalidate: 86400
          }
        }
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
      <div className="min-h-screen w-full grid grid-cols-5 justify-items-center gap-5">
        {data.map((Champion) => (
          <div
            key={Champion.id}
            className="flex justify-center items-center w-full h-[400px] border-gray-600 border rounded-lg"
          >
            <Link href={`/champions/${Champion.id}`} className="w-full">
              <div className="w-full h-[300px] flex flex-col justify-center items-center p-6">
                <Image
                  src={`${RiotChampionImageLink}${Champion.image.full}`}
                  alt={Champion?.image?.full}
                  width={`200`}
                  height={`200`}
                />
                <h3 className="font-bold text-[32px]">{Champion.name}</h3>
                <p>{Champion.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
