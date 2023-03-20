import {
  SELECTED_KEY,
  IMG_KEY,
} from "@pages/showcase/config";

type TConfig = { name: string; img: number | string };
export const resolveTo = ({ name, img }: TConfig) =>
  `/gallery?${SELECTED_KEY}=${name}&${IMG_KEY}=${img}`;
