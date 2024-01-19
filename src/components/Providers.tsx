import { Provider as AppProvider } from '@brysonandrew/context/app/Provider';

import { Provider as ScrollProvider } from '@brysonandrew/context/scroll/Provider';
import { Provider as DarkModeProvider } from '@brysonandrew/dark-mode/context/Provider';
import { Provider as SoundProvider } from '@brysonandrew/sounds/context/Provider';
import { Provider as NetworkProvider } from '@brysonandrew/base/network/context/Provider';
import { Provider as CursorProvider } from '@brysonandrew/cursor/context/Provider';
import { Provider as ViewerProvider } from '@brysonandrew/gallery/viewer/context/Provider';
import { Provider as GalleryProvider } from '@brysonandrew/gallery/context/Provider';
import { Provider as ServicesProvider } from '@pages/index/pricing/context/Provider';
import { Provider as ContactProvider } from '@brysonandrew/contact/context/Provider';
import { Provider as ViewportProvider } from '@brysonandrew/context/viewport/Provider';

import { TChildren } from '@brysonandrew/base/types/dom';
import { FC, PropsWithChildren } from 'react';
import { arrToNest } from '@brysonandrew/base/components/utils/arrToNest';
import { STYLE } from '@components/style';
import { Metal } from './layout/metal';
import { INIT_PROJECT_ITEMS } from '@app/gallery/items';
import { RightHeader as ListRightHeader } from './galllery/list/RightHeader';
import { RightHeader as ViewerRightHeader } from './galllery/viewer/RightHeader';
import { TTitle, TSlug, TRest } from '@app/gallery/types';
import { Blank } from './layout/Blank';
import { TStyle } from '@brysonandrew/context/app/config/types';

type TProps = { children: TChildren };
export const Providers: FC<TProps> = ({
  children: _children,
}) => {
  const children = arrToNest<PropsWithChildren>(
    [
      ViewerProvider,
      ServicesProvider,
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
      <AppProvider<TStyle>
        Texture={Metal}
        Blank={Blank}
        {...STYLE}
      >
        {_children}
      </AppProvider>
    </GalleryProvider>,
    {},
  );
  return <>{children}</>;
};
