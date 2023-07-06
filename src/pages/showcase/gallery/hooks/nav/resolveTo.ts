import { SOURCE_KEY, NAME_KEY, } from "@pages/showcase/config";

type TConfig = {
  pathname: string;
  name: string;
  next: number | string;
};
export const resolveTo = ({ pathname, name, next }: TConfig) => {
  return `${pathname}?${SOURCE_KEY}=${name}&${NAME_KEY}=${next}`;
};
