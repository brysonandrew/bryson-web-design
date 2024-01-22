import { AppProvider } from '@brysonandrew/app/Context';

import { ScrollProvider } from '@brysonandrew/scroll/ScrollProvider';
import { DarkModeProvider } from '@brysonandrew/dark-mode/context/DarkModeProvider';
import { SoundProvider } from '@brysonandrew/sounds/context/SoundProvider';
import { NetworkProvider } from '@brysonandrew/base/network/context/NetworkProvider';
import { CursorProvider } from '@brysonandrew/cursor/context/CursorProvider';
import { ViewerProvider } from '@brysonandrew/gallery/viewer/context/ViewerProvider';
import { GalleryProvider } from '@brysonandrew/gallery/context/GalleryProvider';
import { PricingProvider } from '@pages/index/pricing/context/PricingProvider';
import { ContactProvider } from '@brysonandrew/contact/context/ContactProvider';
import { ViewportProvider } from '@brysonandrew/viewport/ViewportProvider';

import { TChildrenProps } from '@brysonandrew/types/dom';
import { FC, PropsWithChildren } from 'react';
import { arrToNest } from '@brysonandrew/base/components/utils/arrToNest';
import { Metal } from '../components/layout/metal';
import { INIT_PROJECT_ITEMS } from '@app/gallery/items';
import { RightHeader as ListRightHeader } from '../components/galllery/list/RightHeader';
import { RightHeader as ViewerRightHeader } from '../components/galllery/viewer/RightHeader';
import { Blank } from '../components/layout/Blank';
import { useMoveSound } from '@brysonandrew/sounds';
import { CUSTOM_STYLE, TCustomStyle } from '@app/style';
import { TTitle, TSlug, TRest } from '@app/gallery/types';
import { HeadProvider } from 'lib/head';
import { Glow } from '@brysonandrew/filter-animate';

type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children: _children,
}) => {
  const handleMove = useMoveSound();
  const children = arrToNest<PropsWithChildren>(
    [
      HeadProvider,
      PricingProvider,
      ContactProvider,
      CursorProvider,
      ViewportProvider,
      NetworkProvider,
      SoundProvider,
      DarkModeProvider,
      ScrollProvider,
    ],
    <GalleryProvider<TTitle, TSlug, TRest>
      initItems={INIT_PROJECT_ITEMS}
      Viewer={{ RightHeader: ViewerRightHeader }}
      List={{ RightHeader: ListRightHeader }}
    >
      <ViewerProvider>
        <AppProvider<TCustomStyle>
          Back={Metal}
          Blank={Blank}
          Glow={Glow}
          onSound={handleMove}
          style={CUSTOM_STYLE}
        >
          {_children}
        </AppProvider>
      </ViewerProvider>
    </GalleryProvider>,
    {},
  );

  return <>{children}</>;
};
