import { FC, Fragment, PropsWithChildren } from 'react';
import { AURA } from '@brysonandrew/svg-filter/aura';
import { Head } from '@brysonandrew/dark-mode';
import { Global as GlobalCss } from '@emotion/react';
import { usePreloadIcons } from '@brysonandrew/icons-load';
import { CLIPBOARD_SUCCESS_ICON } from '@brysonandrew/notifications/clipboard/ClipboardStateHandler';
import { useHeadProps } from '@shell/global/useHeadProps';
import { useBaseGlobalCss } from '@brysonandrew/css-base/useBaseGlobalCss';
import { COLOR_VARS_CSS } from '@app/color';
import { useApp } from '@brysonandrew/app';
import { TPageTitle } from '@app/routes';

export const Global: FC<PropsWithChildren> = ({
  children,
}) => {
  const { PLACEHOLDER } = useApp();
  const PlaceholderClipPath =
    PLACEHOLDER?.GLOBAL.ClipPath ?? Fragment;
  const headProps = useHeadProps();
  const globalCss = useBaseGlobalCss({
    colorVars: COLOR_VARS_CSS,
  });
  usePreloadIcons([CLIPBOARD_SUCCESS_ICON]);

  return (
    <>
      <Head<TPageTitle> {...headProps} />
      <AURA.GLOBAL.Filter />
      <PlaceholderClipPath />
      <GlobalCss styles={globalCss} />
      {children}
    </>
  );
};
