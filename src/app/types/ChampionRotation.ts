import { ChampionImage } from "./Champion";

export type ChampionRotation = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: ChampionImage;
}