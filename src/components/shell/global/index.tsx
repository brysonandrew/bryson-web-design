import type { FC } from 'react';
import { Head } from '@brysonandrew/lib/head';
import { Filters } from '@brysonandrew/lib/filters';
import { ClipPath } from '@brysonandrew/lib/media/placeholder/ClipPath';
import { Variables } from '@css/Variables';
import { PAGE_RECORD } from '@app/routes/constants/pages';
import { APP_TITLE } from '@app/base/constants';
import { TPage, TPageTitle } from '@app/routes/types';

type TPath = TPage['path'];
type TPageValue = TPageTitle | string;
type TTitleLookup = Record<TPath, TPageValue>;

export const Global: FC = () => {
  const titleLookup = {
    ...Object.values(PAGE_RECORD).reduce(
      (a: TTitleLookup, { path, title }) => ({
        ...a,
        [path]: title,
      }),
      {} as TTitleLookup,
    ),
    '/': APP_TITLE,
  } as const;
  return (
    <>
      <Head<TPath, TPageValue> titleLookup={titleLookup} />
      <ClipPath />
      <Filters />
      <Variables />
    </>
  );
};
