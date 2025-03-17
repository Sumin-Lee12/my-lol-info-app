import Image from "next/image";
import { RiotChampionCardImageLink } from "../components/imageLink";
import Link from "next/link";
import type { Champion } from "../types/Champion";

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
      <div className="min-h-screen w-full grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 justify-items-center gap-5">
        {championList.map((champion) => (
          <div
            key={champion.id}
            className="flex justify-center items-center w-full h-[500px] border-gray-700 border-2 rounded-lg"
          >
            <Link href={`/champions/${champion.id}`} className="w-full">
              <div className="w-full h-[300px] flex flex-col justify-center items-center">
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
