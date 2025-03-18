import Image from "next/image";
import { RiotChampionCardImageLink } from "../components/imageLink";
import Link from "next/link";
import type { Champion } from "../types/Champion";
import { Suspense } from "react";
import Loading from "./loading";

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
        {championList.map((champion) => (
          <div
            key={champion.id}
            className="flex justify-center items-center w-full h-[500px]"
          >
            <Suspense fallback={<Loading />}>
              <Link href={`/champions/${champion.id}`} className="w-full">
                <div className="w-full h-[450px] min-h-[400px] flex flex-col justify-around items-center overflow-hidden bg-yellow-600 pb-2">
                  <div className="w-full h-[400px] overflow-hidden flex justify-center items-center">
                    <Image
                      src={`${RiotChampionCardImageLink}${champion.id}_0.jpg`}
                      alt={champion?.image?.full}
                      width={`300`}
                      height={`300`}
                      className="object-cover scale-110 transition-transform ease-in-out duration-500 hover:scale-125"
                    />
                  </div>
                  <h3 className="font-bold text-[32px] text-white">
                    {champion.name}
                  </h3>
                  <p className="text-black">{champion.title}</p>
                </div>
              </Link>
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
