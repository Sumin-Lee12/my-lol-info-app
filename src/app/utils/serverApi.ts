import type { Champion, ChampionDetailType } from "../types/Champion";

export const fetchChampionList = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const json = await res.json();
  const data: Champion[] = Object.values(json.data);
  return data;
};

export const fetchAllChampionList = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await res.json();
  return data;
};
