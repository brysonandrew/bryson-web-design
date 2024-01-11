import { PROJECT_KEY, NAME_KEY, } from "@pages/projects/config/constants";
import { TProjectKey } from "@pages/projects/config/types";

type TConfig = {
  pathname: string;
  project: TProjectKey;
  next: number | string;
};
export const resolveTo = ({ pathname, project, next }: TConfig) => {
  return `${pathname}?${PROJECT_KEY}=${project}&${NAME_KEY}=${next}`;
};
