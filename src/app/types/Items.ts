import { ImageObject } from "./Champion";

export type Item = {
  name: string;
  plaintext: string;
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string;
  image: ImageObject;
};
