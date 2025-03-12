export type ChampionImage = { // 이것도 export가 되야하나?
  full: string;
  sprite: string;
  group: string;
  x: number,
  y: number,
  w: number,
  h: number,
}

export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: ChampionImage;
}

export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  info: {
    attack: number,
    defense: number,
    magic: number,
    difficulty: 4
    },
  image: ChampionImage;
}