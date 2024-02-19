import {
  AppProvider,
  TAppProviderProps,
} from '@brysonandrew/app';
import { ScrollProvider } from '@brysonandrew/scroll';
import { DarkModeProvider } from '@brysonandrew/dark-mode';
import { SoundProvider } from '@brysonandrew/sounds/SoundProvider';
import { NetworkProvider } from '@brysonandrew/network/NetworkProvider';
import { CursorProvider } from '@brysonandrew/cursor';
import { GalleryProvider } from '@brysonandrew/gallery/GalleryProvider';
import { PricingProvider } from '@pages/index/pricing/PricingProvider';
import { ContactProvider } from '@brysonandrew/contact/ContactProvider';
import { ViewportProvider } from '@brysonandrew/viewport/ViewportProvider';
import { TChildrenProps } from '@brysonandrew/config-types/dom';
import { FC, PropsWithChildren } from 'react';
import { arrToNest } from '@brysonandrew/layout-utils/arrToNest';
import { INIT_PROJECT_ITEMS } from '@app/gallery/items';
import { RightHeader as ListRightHeader } from '@components/galllery/list/RightHeader';
import { RightHeader as ViewerRightHeader } from '@components/galllery/viewer/RightHeader';
import { LeftHeader } from '@components/galllery/LeftHeader';
import {
  useMoveSound,
  useOffSound,
  useOnSound,
} from '@brysonandrew/sounds';
import { CUSTOM_STYLE, TCustomStyle } from '@app/style';
import screensRecordJson from '../lookup.json';
import { HeadHelmetProvider } from '@brysonandrew/head';
import { ViewerProvider } from '@brysonandrew/gallery';
import { APP_BASE_PROPS } from '@app/base';
import {
  Metal,
  MetalMotion,
} from '@brysonandrew/texture-metal';
import { AppInit } from '@brysonandrew/app/AppInit';
import { arrToChainedValueNest } from '@brysonandrew/layout-utils/arrToChainedValueNest';
import { LayoutLight } from '@brysonandrew/layout-light';
import { LayoutPlaceholder } from '@brysonandrew/layout/placeholder';
import { TTitle, TRest } from '@app/gallery/types';

type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children: _children,
}) => {
  const handleMove = useMoveSound();
  const handleOffSound = useOffSound();
  const handleOnSound = useOnSound();

  const children = arrToNest<PropsWithChildren>(
    [
      HeadHelmetProvider,
      PricingProvider,
      ContactProvider,
      CursorProvider,
      ViewportProvider,
      NetworkProvider,
      SoundProvider,
      DarkModeProvider,
      ScrollProvider,
    ],
    <GalleryProvider<TTitle, TRest>
      initItems={INIT_PROJECT_ITEMS}
      Viewer={{
        RightHeader: ViewerRightHeader,
        LeftHeader,
      }}
      List={{ RightHeader: ListRightHeader, LeftHeader }}
    >
      <AppInit<TCustomStyle>
        BackFill={Metal}
        BackMotionFill={MetalMotion}
        sounds={{
          move: handleMove,
          on: handleOnSound,
          off: handleOffSound,
        }}
        style={CUSTOM_STYLE}
        {...APP_BASE_PROPS}
      >
        {(value: TAppProviderProps<TCustomStyle>) => (
          <>
            {arrToChainedValueNest<typeof value>(
              [LayoutLight, LayoutPlaceholder],
              (
                nextValue: TAppProviderProps<TCustomStyle>,
              ) => (
                <ViewerProvider
                  screensRecordJson={screensRecordJson}
                >
                  <AppProvider<TCustomStyle> {...nextValue}>
                    {_children}
                  </AppProvider>
                </ViewerProvider>
              ),
            )(value)}
          </>
        )}
      </AppInit>
    </GalleryProvider>,
    {},
  );

  return <>{children}</>;
};
