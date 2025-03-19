import characterImage from "../public/lolCharacter.jpg";
import characterRotationImage from "../public/lolChampion.jpg";
import itemImage from "../public/lolItems.webp";

export const linkArray = [
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
