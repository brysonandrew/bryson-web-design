import type { FC, PropsWithChildren } from 'react';
import { AURA } from '@brysonandrew/svg-filter/aura';
import { useCurrParams } from '@brysonandrew/gallery';
import { Head, MonoHead } from '@brysonandrew/dark-mode';
import { TTitlesResolver } from '@brysonandrew/head';
import {
  APP_DESCRIPTION,
  APP_TITLE,
} from '@app/base/constants';
import { TPageTitle, PAGE_RECORD } from '@app/routes';
import { TPage } from '@brysonandrew/routes/types';
const { TITLE_KEY_DELIMITER, resolveCompositeTitle } =
  MonoHead;
import { Global as GlobalCss, css } from '@emotion/react';
import { capitalize } from '@brysonandrew/utils';
import { COLOR_VARS_CSS } from '@app/color';
import { PLACEHOLDER } from '@app/placeholder';

type TPath = TPage<TPageTitle>['path'];
type TPageValue = TPageTitle | string;
type TTitleLookup = Record<TPath, TPageValue>;

export const Global: FC<PropsWithChildren> = ({
  children,
}) => {
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

  const globalCss = css`
    :root {
      ${COLOR_VARS_CSS}
      ${PLACEHOLDER.GLOBAL.VARS_CSS}
    }
  `;
  return (
    <>
      <Head<TPath, TPageValue>
        description={APP_DESCRIPTION}
        titlesResolver={titlesResolver}
        titleLookup={titleLookup}
      />
      <AURA.GLOBAL.Filter />
      <PLACEHOLDER.GLOBAL.ClipPath />
      <GlobalCss styles={globalCss} />
      {children}
    </>
  );
};
