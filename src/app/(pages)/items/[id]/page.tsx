// import React from "react";
// import type { Item } from "../../types/Items";
// import Image from "next/image";
// import { RiotItemImageLink } from "../../components/imageLink";

// interface ItemIdProps {
//   params: { id: string };
// }

// const ItemDetailPage = async ({ params }: ItemIdProps) => {
//   // API 호출로 데이터 가져오기
//   const res = await fetch(
//     `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/en_US/${params.id}.json`,
//     {
//       cache: "force-cache",
//     });

//   if (!res.ok) throw new Error("아이템 데이터 가져오기 실패");

//   const Item = await res.json();
//   const itemDetail: Item[] = Object.values(champion.data);

//   if (!itemDetail) throw new Error("아이템 데이터 가져오기 실패");
// //
//   return (
//     <div>
//       <div>champions 상세</div>
//       {itemDetail.map((champion) => {
//         return (
//           <div key={champion.id}>
//             <Image
//               src={`${RiotItemImageLink}${champion.image.full}`}
//               alt={champion.image.full}
//               width={300}
//               height={300}
//             />
//             <h1>{champion.title}</h1>
//             <p>{champion.lore}</p>
//             <div>
//               <p>{champion.info?.attack}</p>
//               <p>{champion.info?.defense}</p>
//               <p>{champion.info?.difficulty}</p>
//               <p>{champion.info?.magic}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ItemDetailPage;
