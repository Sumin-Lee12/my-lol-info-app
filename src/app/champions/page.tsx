import Image from "next/image";
import { RiotChampionImageLink } from "../components/imageLink";
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
      <h1 className="font-bold text-[32px] my-20">챔피언 목록</h1>
      <div className="min-h-screen w-full grid grid-cols-5 justify-items-center gap-5">
        {championList.map((champion) => (
          <div
            key={champion.id}
            className="flex justify-center items-center w-full h-[400px] border-gray-600 border rounded-lg"
          >
            <Link href={`/champions/${champion.id}`} className="w-full">
              <div className="w-full h-[300px] flex flex-col justify-center items-center p-6">
                <Image
                  src={`${RiotChampionImageLink}${champion.image.full}`}
                  alt={champion?.image?.full}
                  width={`200`}
                  height={`200`}
                />
                <h3 className="font-bold text-[32px]">{champion.name}</h3>
                <p>{champion.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
