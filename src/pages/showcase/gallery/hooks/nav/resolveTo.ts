import { SELECTED_KEY, IMG_KEY, } from "@pages/showcase/config";

type TConfig = {
  pathname: string;
  name: string;
  next: number | string;
};
export const resolveTo = ({ pathname, name, next }: TConfig) => {
  return `${pathname}?${SELECTED_KEY}=${name}&${IMG_KEY}=${next}`;
};
