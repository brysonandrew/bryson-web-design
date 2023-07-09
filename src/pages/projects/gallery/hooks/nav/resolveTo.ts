import { TProjectKey } from "@constants/projects";
import { SOURCE_KEY, NAME_KEY, } from "@pages/projects/config";

type TConfig = {
  pathname: string;
  source: TProjectKey;
  next: number | string;
};
export const resolveTo = ({ pathname, source, next }: TConfig) => {
  return `${pathname}?${SOURCE_KEY}=${source}&${NAME_KEY}=${next}`;
};
