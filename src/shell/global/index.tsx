import { FC, Fragment, PropsWithChildren } from 'react';
import { AURA } from '@brysonandrew/svg-filter/aura';
import { Head } from '@brysonandrew/dark-mode';
import { usePreloadIcons } from '@brysonandrew/icons-load';
import { CLIPBOARD_SUCCESS_ICON } from '@brysonandrew/notifications/clipboard/ClipboardStateHandler';
import { useHeadProps } from '@shell/global/useHeadProps';
import { useApp } from '@brysonandrew/app';
import { GlobalCss } from '@shell/global/Css';
import { TPageTitle } from '@app/routes';

export const Global: FC<PropsWithChildren> = ({
  children,
}) => {
  const { PLACEHOLDER } = useApp();
  const PlaceholderClipPath =
    PLACEHOLDER?.GLOBAL.ClipPath ?? Fragment;
  const headProps = useHeadProps();

  usePreloadIcons([CLIPBOARD_SUCCESS_ICON]);

  return (
    <>
      <Head<TPageTitle> {...headProps} />
      <AURA.GLOBAL.Filter />
      <PlaceholderClipPath />
      <GlobalCss>{children}</GlobalCss>
    </>
  );
};
