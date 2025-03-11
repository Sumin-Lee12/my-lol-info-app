// import { Card } from "../components/card";
// import type {CardProps} from "../components/card";
import type { Champion } from "../types/Champion";
import Image from "next/image";

export default async function itemPage () {
  const res = await fetch("https://ddragon.leagueoflegends.com/cdn/15.5.1/data/en_US/champion.json", {
    cache: "force-cache"
  });
  const json = await res.json();
  const data: Champion[] = Object.values(json.data);
  console.log(data);

  return (
    <div className="min-h-screen w-full grid grid-cols-4 justify-items-center gap-5">
      {data.map((champion) => (
          <div className="flex flex-col justify-center items-center w-full h-[300px] border">
            {/* <Image
              src={champion.image.sprite}
              alt={champion.image.full}
              width={champion.image.w}
              height={champion.image.h}
            /> */}
            <h3>{champion.name}</h3>
            <p>{champion.title}</p>
          </div>
        )
      )}
    </div>
  )
}

