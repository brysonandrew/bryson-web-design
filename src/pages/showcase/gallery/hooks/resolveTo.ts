import {
  SELECTED_KEY,
  IMG_KEY,
} from "@pages/showcase/config";

type TConfig = {
  name: string;
  img: number | string;
  pathname: string;
};
export const resolveTo = ({ name, img, pathname }: TConfig) =>
  `${pathname}?${SELECTED_KEY}=${name}&${IMG_KEY}=${img}`;
