import { Provider as AppProvider } from '@brysonandrew/app/Provider';

import { Provider as ScrollProvider } from '@brysonandrew/scroll/Provider';
import { Provider as DarkModeProvider } from '@brysonandrew/dark-mode/context/Provider';
import { Provider as SoundProvider } from '@brysonandrew/sounds/context/Provider';
import { NetworkProvider } from '@brysonandrew/base/network/context/NetworkProvider';
import { Provider as CursorProvider } from '@brysonandrew/cursor/context/Provider';
import { ViewerProvider } from '@brysonandrew/gallery/viewer/context/ViewerProvider';
import { Provider as GalleryProvider } from '@brysonandrew/gallery/context/Provider';
import { Provider as ServicesProvider } from '@pages/index/pricing/context/Provider';
import { Provider as ContactProvider } from '@brysonandrew/contact/context/Provider';
import { Provider as ViewportProvider } from '@brysonandrew/viewport/Provider';

import { TChildrenProps } from '@brysonandrew/base/types/dom';
import { FC, PropsWithChildren } from 'react';
import { arrToNest } from '@brysonandrew/base/components/utils/arrToNest';
import { Metal } from './layout/metal';
import { INIT_PROJECT_ITEMS } from '@app/gallery/items';
import { RightHeader as ListRightHeader } from './galllery/list/RightHeader';
import { RightHeader as ViewerRightHeader } from './galllery/viewer/RightHeader';
import { Blank } from './layout/Blank';
import { useMoveSound } from '@brysonandrew/sounds';
import {
  CUSTOM_STYLE,
  TCustomStyle,
  TStyle,
} from '@app/style';
import { DEFAULT_STYLE } from '@brysonandrew/app';
import { TTitle, TSlug, TRest } from '@app/gallery/types';

type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children: _children,
}) => {
  const handleMove = useMoveSound();
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
      <AppProvider<TCustomStyle>
        Texture={Metal}
        Blank={Blank}
        onSound={handleMove}
        style={CUSTOM_STYLE}
      >
        {_children}
      </AppProvider>
    </GalleryProvider>,
    {},
  );

  return <>{children}</>;
};
