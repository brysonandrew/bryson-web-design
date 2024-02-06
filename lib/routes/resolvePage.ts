import { titleToKebab } from '@brysonandrew/utils-format';

export const resolvePage = <T extends string>(title: T) => {
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
