import { PROJECT_KEY, NAME_KEY, } from "@lib/gallery/config/constants";
import { TProjectKey } from "@lib/gallery/config/types";

type TConfig = {
  pathname: string;
  project: TProjectKey;
  next: number | string;
};
export const resolveTo = ({ pathname, project, next }: TConfig) => {
  return `${pathname}?${PROJECT_KEY}=${project}&${NAME_KEY}=${next}`;
};
