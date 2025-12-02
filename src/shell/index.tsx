import { type FC } from 'react';
import { Global } from './global';
import { Cursor } from '@brysonandrew/motion-cursor';
import { isDesktop } from 'react-device-detect';
import { Footer } from './footer';
import { Header } from './header';
import { Outlet } from 'react-router';
import { withProviders } from '@shell/providers/withProviders';
import { useApp } from '@brysonandrew/app';
import { P12Y } from '@brysonandrew/space/P12Y';
import { SnowfallOverlay } from '@brysonandrew/snowfall';

export const Shell: FC = withProviders(() => {
  const { BackScreen, FadeV } = useApp();
  return (
    <Global>
      <BackScreen />
      <P12Y />
      <Outlet />
      <FadeV />
      <Header />
      <Footer />
      {isDesktop && <Cursor />}
    </Global>
  );
});
