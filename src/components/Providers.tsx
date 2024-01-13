import { Provider as ScrollProvider } from '@lib/context/scroll/Provider';
import { Provider as DarkModeProvider } from '@lib/hooks/dark-mode/context/Provider';
import { Provider as SoundProvider } from '@lib/hooks/sounds/context/Provider';
import { Provider as AppProvider } from '@lib/components/base/context/Provider';
import { Provider as CursorProvider } from '@lib/components/cursor/context/Provider';
import { Provider as GalleryProvider } from '@pages/projects/gallery/context/Provider';
import { Provider as ServicesProvider } from '@pages/index/pricing/context/Provider';
import { Provider as ContactProvider } from '@pages/index/contact/context/Provider';
import { Provider as ViewportProvider } from '@lib/context/viewport/Provider';

import { TChildren } from '@lib/types/dom';
import { FC, PropsWithChildren } from 'react';
import { arrToNest } from '@lib/utils/components/arrToNest';

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
      AppProvider,
      SoundProvider,
      DarkModeProvider,
      ScrollProvider,
    ],
    _children,
    {},
  );
  return <>{children}</>;
};
