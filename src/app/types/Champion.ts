export type ImageObject = {
  // 이것도 export가 되야하나?
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Champion = {
  id: string;
  key: number;
  name: string;
  title: string;
  blurb: string;
  image: ImageObject;
};

export type ChampionDetail = {
  blurb: string;
  id: string;
  image: ImageObject;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  key: number;
  name: string;
  partype: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
  };
  tags: string[];
  title: string;
  version: string;
};
