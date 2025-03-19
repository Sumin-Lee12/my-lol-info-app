import Image from "next/image";
import { RiotChampionCardImageLink } from "../components/imageLink";
import Link from "next/link";
import type { Champion, ChampionDetail } from "../types/Champion";

const Card = ({
  championDetail,
}: {
  championDetail: Champion[] | ChampionDetail[];
}) => {
  return (
    <>
      {championDetail.map((champion) => (
        <div
          key={champion.id}
          className="flex justify-center items-center w-full h-[500px]"
        >
          <Link href={`/champions/${champion.id}`} className="w-full">
            <div className="w-full max-w-[300px] h-[450px] min-h-[400px] flex flex-col justify-around items-center overflow-hidden bg-gray-800 pb-3">
              <div className="w-full h-[400px] overflow-hidden flex justify-center items-center">
                <Image
                  src={`${RiotChampionCardImageLink}${champion.id}_0.jpg`}
                  alt={champion?.image?.full}
                  width={`300`}
                  height={`300`}
                  className="object-cover scale-110 transition-transform ease-in-out duration-500 hover:scale-125"
                />
              </div>
              <h3 className="font-bold text-[32px] text-white mt-2">
                {champion.name}
              </h3>
              <p className="text-gray-500">{champion.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
