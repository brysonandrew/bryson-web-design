import { type FC } from 'react';
import { Global } from './global';
import { Cursor } from '@brysonandrew/cursor';
import { isDesktop } from 'react-device-detect';
import { Providers } from 'src/shell/Providers';
import { P24Y } from '@brysonandrew/space/P24Y';
import { Footer } from './footer';
import { Header } from './header';
import { Outlet } from 'react-router';
import { VerticalEdges } from '@brysonandrew/fade-edge';
import { BackgroundFill } from '@brysonandrew/dark-mode';

export const Shell: FC = () => {
  return (
    <>
      <Providers>
        <>
          {/* {import.meta.env.DEV && <Hud />} */}
          <div className='fill-screen'>
            <BackgroundFill />
          </div>
          <Global />
          <P24Y />
          <Outlet />
          <VerticalEdges />
          <Header />
          <Footer />
          {isDesktop && <Cursor />}
        </>
      </Providers>
    </>
  );
};
