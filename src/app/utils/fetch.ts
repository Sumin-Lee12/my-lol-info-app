export interface ChampionIdProps {
  params: { id: string };
}

// export async function fetchChampionDetail({ params }: ChampionIdProps) {
//   async function fetchWithDelay(url: string, delay: number) {
//     await new Promise((resolve) => setTimeout(resolve, delay));
//     const res = await fetch(url, {
//       cache: "force-cache",
//     });
//     return res.json();
//   }

//   const data = await fetchWithDelay(
//     `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${params.id}.json`,
//     3000
//   );
//   if (!data.ok) throw new Error("Champion 데이터 가져오기 실패");
//   return data;
// }

export const fetchWithDelay = async (url: string, delay: number) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, delay)); // 4초 지연
    const res = await fetch(url, {
      cache: "force-cache",
    });
    if (!res.ok) throw new Error("응답 오류");

    return res;
  } catch (error) {
    throw new Error(`API 요청 중 오류 발생: ${error}`);
  }
};
