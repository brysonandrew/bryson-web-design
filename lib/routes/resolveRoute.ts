import {
  TPath,
  TRoute,
} from '@brysonandrew/routes/config/types';
import { titleToKebab } from '@brysonandrew/utils-format';

export const resolveRoute = <T extends string>(
  title: T,
  base: TPath<string>,
): TRoute<T, typeof base> => {
  const key = titleToKebab<T>(title);
  const page = {
    key,
    title,
    path: `${base}${'Index' === title ? '' : key}` as const,
  } as const;

  return page;
};
