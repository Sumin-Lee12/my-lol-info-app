import Link from "next/link";
import Image from "next/image";
import characterImage from "./public/lolCharacter.jpg";
import characterRotationImage from "./public/lolChampion.jpg";
import itemImage from "./public/lolItems.webp"

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-20">Home Page</h1>
      <div>
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
  )
}
