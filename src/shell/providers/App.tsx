import {
  AppProvider,
  TAppProviderProps,
  TLayoutOptionsRecord,
} from '@brysonandrew/app';
import { TChildrenProps } from '@brysonandrew/config-types/dom';
import { FC } from 'react';
import {
  useMoveSound,
  useOffSound,
  useOnSound,
} from '@brysonandrew/sounds';
import { CUSTOM_STYLE, TCustomStyle } from '@app/style';
import screensRecordJson from '../../screens/gallery/lookup.json';
import { ViewerProvider } from '@brysonandrew/gallery-viewer';
import { APP_BASE_PROPS } from '@app/base';
import {
  TextureMetal,
  TextureMetalMotion,
} from '@brysonandrew/texture-metal';
import { AppInit } from '@brysonandrew/app/AppInit';
import { arrToChainedValueNest } from '@brysonandrew/layout-utils/arrToChainedValueNest';
import { LayoutLight } from '@brysonandrew/layout-light';
import { LayoutPlaceholder } from '@brysonandrew/layout-placeholder';

type TLayoutOptions = TLayoutOptionsRecord;
export type TApp = TCustomStyle & TLayoutOptions;
type TProps = TChildrenProps;
export const App: FC<TProps> = ({ children }) => {
  const handleMove = useMoveSound();
  const handleOffSound = useOffSound();
  const handleOnSound = useOnSound();

  return (
    <AppInit<TCustomStyle>
      BackFill={TextureMetal}
      BackMotionFill={TextureMetalMotion}
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
                  {children}
                </AppProvider>
              </ViewerProvider>
            ),
          )(value)}
        </>
      )}
    </AppInit>
  );
};
