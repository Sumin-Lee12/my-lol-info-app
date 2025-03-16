import Link from "next/link";
import Image from "next/image";
import characterImage from "./public/lolCharacter.jpg";
import characterRotationImage from "./public/lolChampion.jpg";
import itemImage from "./public/lolItems.webp";
import homepageImage from "./public/lol-hompg-img.jpg";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center bg-black">
      <div className="relative w-screen h-screen">
        <Image
          src={homepageImage}
          alt="LoL Home Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-950 mix-blend-multiply opacity-80"></div>
        <h1 className="absolute inset-0 flex justify-center items-center text-white text-5xl font-bold z-10">
          League of Legends
        </h1>
      </div>
      <div className="text-white">
        <Link href={"/champions"}>
          <div className="justify-items-center mb-60">
            <Image
              src={characterRotationImage}
              alt="character image"
              width={500}
              height={400}
              className="mb-5"
            />
            <p>챔피언 목록보기</p>
          </div>
        </Link>
        <Link href={"/items"}>
          <div className="justify-items-center mb-60">
            <Image
              src={itemImage}
              alt="character image"
              width={500}
              height={400}
              className="mb-5"
            />
            <p>아이템 목록보기</p>
          </div>
        </Link>
        <Link href={"/rotation"}>
          <div className="justify-items-center mb-60">
            <Image
              src={characterImage}
              alt="character image"
              width={500}
              height={400}
              className="mb-5"
            />
            <p>이번 주 무료 챔피언 목록보기</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
