import { ChampionImage } from "./Champion";

export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: ChampionImage;
}