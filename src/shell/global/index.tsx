import { FC, Fragment, PropsWithChildren } from 'react';
import { AURA } from '@brysonandrew/svg-filter/aura';
import { Head } from '@brysonandrew/head/head';
import { usePreloadIcons } from '@brysonandrew/icons-load';
import { CLIPBOARD_SUCCESS_ICON } from '@brysonandrew/notifications/clipboard/ClipboardStateHandler';
import { useHeadProps } from '@shell/global/useHeadProps';
import { useApp } from '@brysonandrew/app';
import { GlobalCss } from '@shell/global/Css';
import { TPageTitle } from '@app/routes/config/types';
import { OFFLINE_ICON } from '@brysonandrew/icons-keys/network';

export const Global: FC<PropsWithChildren> = ({
  children,
}) => {
  const { PLACEHOLDER } = useApp();
  const PlaceholderClipPath =
    PLACEHOLDER?.GLOBAL.ClipPath ?? Fragment;
  const headProps = useHeadProps();

  usePreloadIcons([CLIPBOARD_SUCCESS_ICON, OFFLINE_ICON]);

  return (
    <>
      <Head<TPageTitle> {...headProps} />
      <AURA.GLOBAL.Filter />
      <PlaceholderClipPath />
      <GlobalCss>{children}</GlobalCss>
    </>
  );
};
