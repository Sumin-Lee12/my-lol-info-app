import type { Item } from "../types/Items";
import Image from "next/image";
import { RiotItemImageLink } from "../components/imageLink";

export default async function ItemPage() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const json = await res.json();
  const data: Item[] = Object.values(json.data);
  console.log(data);

  return (
    <div className="min-h-screen w-full justify-items-center mx-5">
      <h1 className="font-bold text-[32px] my-20">아이템 목록</h1>
      <div className="min-h-screen w-full grid grid-cols-5 justify-items-center gap-5">
        {data.map((Item) => (
          <div
            key={Item.name}
            className="flex justify-center items-center w-full h-[400px] border-gray-600 border rounded-lg"
          >
            <div className="w-full h-[300px] flex flex-col justify-center items-center p-6">
              <Image
                src={`${RiotItemImageLink}${Item.image.full}`}
                alt={Item?.image?.full}
                width={`200`}
                height={`200`}
              />
              <h3 className="font-bold text-[32px]">{Item.name}</h3>
              <p>{Item.plaintext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
