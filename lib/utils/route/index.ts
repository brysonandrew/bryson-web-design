import { TPageTitle } from '@app/routes/types';
import { titleToKebab } from '@lib/utils/format';

export const resolvePage = <T extends TPageTitle>(
  title: T,
  path: string | null = null,
) => {
  const key = titleToKebab<typeof title>(title);
  return {
    [key]: {
      key,
      title,
      path: path ?? `/${key}`,
    },
  };
};
