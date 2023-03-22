import {
  SELECTED_KEY,
  IMG_KEY,
} from "@pages/showcase/config";
import type { TBase } from "./types";

type TConfig = {
  name: string;
  img: number | string;
  base: TBase;
};
export const resolveTo = ({ name, img, base }: TConfig) =>
  `/${base}?${SELECTED_KEY}=${name}&${IMG_KEY}=${img}`;
