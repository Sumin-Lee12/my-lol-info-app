// export type headers = {
//   "Content-Type": string;
//   API_KEY: string;
// };

// export async function GET() {
//   const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

//   if (!apiKey) {
//     throw new Error("API_KEY가 필요합니다");
//   }

//   const res = await fetch(
//     "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/en_US/champion.json",
//     {
//       headers: {
//         //???????여기 headers 타입을 넣는 건가? 왜 빨간 오류가 안 사라지지?
//         "Content-Type": "application/json",
//         "API-KEY": apiKey,
//       },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch champion data");
//   }

//   const data = await res.json();

//   return Response.json({ data });
// }
