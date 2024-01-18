import type { FC } from 'react';
import { Head } from 'lib/head';
import { Filters } from 'lib/filters';
import { ClipPath } from 'lib/media/placeholder/ClipPath';
import { Variables } from '@css/Variables';
import { PAGE_NAV_VALUES } from '@app/routes/constants/pages';
import { APP_TITLE } from '@app/base/constants';

type TTitleLookup = Record<
  (typeof PAGE_NAV_VALUES)[number]['key'],
  string
>;

export const Global: FC = () => {
  const titleLookup = {
    '/': APP_TITLE,
    ...PAGE_NAV_VALUES.reduce(
      (a: TTitleLookup, { path, title }) => ({
        ...a,
        [path]: title,
      }),
      {} as TTitleLookup,
    ),
  };
  return (
    <>
      <Head<TTitleLookup> titleLookup={titleLookup} />
      <ClipPath />
      <Filters />
      <Variables />
    </>
  );
};
