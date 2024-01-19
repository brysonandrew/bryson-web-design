import {
  PROJECT_KEY,
  NAME_KEY,
} from '@brysonandrew/lib/gallery/config/constants';

type TConfig<T extends string> = {
  pathname: string;
  project: T;
  next: number | string;
};
export const resolveTo = <T extends string>({
  pathname,
  project,
  next,
}: TConfig<T>) => {
  return `${pathname}?${PROJECT_KEY}=${project}&${NAME_KEY}=${next}` as const;
};
