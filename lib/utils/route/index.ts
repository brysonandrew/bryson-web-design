import { TPageTitle } from '@app/routes/types';
import { TTTitleToKebab } from '@lib/types/transformers/format/title';
import { titleToKebab } from '@lib/utils/format';

type TPath<T extends string> = T extends 'Index'
  ? '/'
  : `/${TTTitleToKebab<T>}`;
export const resolvePage = <T extends TPageTitle>(
  title: T,
) => {
  const key = titleToKebab<T>(title);
  const page = {
    key,
    title,
    path: 'Index' === title ? '/' : (`/${key}` as const),
  } as const;

  const result = {
    [key]: page,
  } as const;

  return result;
};
