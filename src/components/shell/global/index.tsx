import type { FC } from 'react';
import { Aura } from '@brysonandrew/filters';
import { ClipPath } from '@brysonandrew/media/placeholder/ClipPath';
import { Variables } from '@css/Variables';
import { PAGE_RECORD } from '@app/routes/constants/pages';
import {
  APP_DESCRIPTION,
  APP_TITLE,
} from '@app/base/constants';
import { TPage, TPageTitle } from '@app/routes/types';
import { capitalize } from 'lodash';
import { useCurrParams } from '@brysonandrew/gallery';
import {
  Head,
  TITLE_KEY_DELIMITER,
  resolveCompositeTitle,
  TTitlesResolver,
} from '@brysonandrew/dark-mode';

type TPath = TPage['path'];
type TPageValue = TPageTitle | string;
type TTitleLookup = Record<TPath, TPageValue>;

export const Global: FC = () => {
  const { name, project } = useCurrParams();
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
  const titlesResolver: TTitlesResolver = (
    titles: string[],
  ) =>
    project
      ? `Project${TITLE_KEY_DELIMITER}${capitalize(
          project,
        )}${TITLE_KEY_DELIMITER}${name}`
      : resolveCompositeTitle(...titles);
  return (
    <>
      <Head<TPath, TPageValue>
        description={APP_DESCRIPTION}
        titlesResolver={titlesResolver}
        titleLookup={titleLookup}
      />
      <ClipPath />
      <Aura />
      <Variables />
    </>
  );
};
