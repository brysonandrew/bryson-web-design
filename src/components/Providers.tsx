import { Provider as AppProvider } from '@lib/context/app/Provider';

import { Provider as ScrollProvider } from '@lib/context/scroll/Provider';
import { Provider as DarkModeProvider } from '@lib/hooks/dark-mode/context/Provider';
import { Provider as SoundProvider } from '@lib/hooks/sounds/context/Provider';
import { Provider as NetworkProvider } from '@lib/network/context/Provider';
import { Provider as CursorProvider } from '@lib/cursor/context/Provider';
import { Provider as GalleryProvider } from '@pages/projects/gallery/context/Provider';
import { Provider as ServicesProvider } from '@pages/index/pricing/context/Provider';
import { Provider as ContactProvider } from '@pages/index/contact/context/Provider';
import { Provider as ViewportProvider } from '@lib/context/viewport/Provider';

import { TChildren } from '@lib/types/dom';
import { FC, PropsWithChildren } from 'react';
import { arrToNest } from '@lib/components/utils/arrToNest';
import { MetalGlowCircle } from './decoration/metal/MetalGlowCircle';
import { MetalGlow1 } from './decoration/metal/MetalGlow1';
import { MetalGlow2 } from './decoration/metal/MetalGlow2';
import { Metal1 } from './decoration/metal/Metal1';

type TProps = { children: TChildren };
export const Providers: FC<TProps> = ({
  children: _children,
}) => {
  const children = arrToNest<PropsWithChildren>(
    [
      GalleryProvider,
      ServicesProvider,
      ContactProvider,
      CursorProvider,
      ViewportProvider,
      NetworkProvider,
      SoundProvider,
      DarkModeProvider,
      ScrollProvider,
    ],
    _children,
    {},
  );
  return (
    <AppProvider
      Background={Metal1}
      BackgroundGlowCircle={MetalGlowCircle}
      BackgroundGlow={MetalGlow1}
      BackgroundGlow1={MetalGlow1}
    >
      {children}
    </AppProvider>
  );
};
