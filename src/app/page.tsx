import Link from "next/link";
import Image from "next/image";
import characterImage from "./public/lolCharacter.jpg";
import characterRotationImage from "./public/lolChampion.jpg";
import itemImage from "./public/lolItems.webp";
import homepageImage from "./public/lol-hompg-img.jpg";

const linkArray = [
  {
    id: 1,
    href: "/champions",
    imageSrc: characterRotationImage,
    title: "챔피언 목록보기",
  },
  {
    id: 2,
    href: "/items",
    imageSrc: itemImage,
    title: "아이템 목록보기",
  },
  {
    id: 2,
    href: "/rotation",
    imageSrc: characterImage,
    title: "이번 주 무료 챔피언 목록보기",
  },
];

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-screen h-screen">
        <Image
          src={homepageImage}
          alt="LoL Home Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-950 mix-blend-multiply opacity-80"></div>
        <h1 className="absolute inset-0 flex justify-center text-white items-center text-7xl font-bold z-10">
          League of Legends
        </h1>
      </div>
      <div className="flex flex-row gap-10">
        {linkArray.map((card) => {
          return (
            <div
              key={card.id}
              className="text-white mt-48 w-[400px] h-[300px] mb-60"
            >
              <Link href={card.href}>
                <div className="justify-items-center mb-60">
                  <div className="h-[250px] overflow-hidden mb-5">
                    <Image
                      src={card.imageSrc}
                      alt="character image"
                      className="h-[250px] transition-transform ease-in-out duration-500 hover:scale-110"
                    />
                  </div>
                  <p className="text-xl font-medium">{card.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
