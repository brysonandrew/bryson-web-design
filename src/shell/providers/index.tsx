import { TLayoutOptionsRecord } from '@brysonandrew/app';
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
import { FC, PropsWithChildren, useMemo } from 'react';
import { arrToNest } from '@brysonandrew/layout-utils/arrToNest';
import { INIT_PROJECT_ITEMS } from '@app/gallery/items';
import { RightHeader as ListRightHeader } from '@components/galllery/list/RightHeader';
import { RightHeader as ViewerRightHeader } from '@components/galllery/viewer/RightHeader';
import { LeftHeader } from '@components/galllery/LeftHeader';
import { TCustomStyle } from '@app/style';
import { HeadHelmetProvider } from '@brysonandrew/head';
import { App } from '@shell/providers/App';
import { TTitle, TRest } from '@app/gallery/types';

type TLayoutOptions = TLayoutOptionsRecord;
export type TApp = TCustomStyle & TLayoutOptions;

type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children: _children,
}) => {
  const children = useMemo(() => {
    return arrToNest<PropsWithChildren>(
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
        <App>{_children}</App>
      </GalleryProvider>,
      {},
    );
  }, []);

  return <>{children}</>;
};
