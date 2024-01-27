import { AppProvider } from '@brysonandrew/app/Context';

import { ScrollProvider } from '@brysonandrew/scroll';
import { DarkModeProvider } from '@brysonandrew/dark-mode';
import { SoundProvider } from '@brysonandrew/sounds/SoundProvider';
import { NetworkProvider } from '@brysonandrew/network/NetworkProvider';
import { CursorProvider } from '@brysonandrew/cursor';
import { ViewerProvider } from '@brysonandrew/gallery/viewer/ViewerProvider';
import { GalleryProvider } from '@brysonandrew/gallery/GalleryProvider';
import { PricingProvider } from '@pages/index/pricing/PricingProvider';
import { ContactProvider } from '@brysonandrew/contact/ContactProvider';
import { ViewportProvider } from '@brysonandrew/viewport/ViewportProvider';

import { TChildrenProps } from '@brysonandrew/types/dom';
import { FC, PropsWithChildren } from 'react';
import { arrToNest } from '@brysonandrew/layout/utils/arrToNest';
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
import screensRecordJson from './lookup.json';

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
      <ViewerProvider screensRecordJson={screensRecordJson}>
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
