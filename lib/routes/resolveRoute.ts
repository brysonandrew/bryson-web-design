import {
  TPath,
  TRoute,
} from '@brysonandrew/routes/config/types';
import { pascalToKebab } from '@brysonandrew/utils-format';

export const resolveRoute = <T extends string>(
  title: T,
  base: TPath<string>
): TRoute<T, typeof base> => {
  const key = pascalToKebab(title);
  const page = {
    key,
    title,
    path: `${base}${
      'Index' === title || 'Home' === title ? '' : key
    }` as const,
  } as const;

  return page;
};
