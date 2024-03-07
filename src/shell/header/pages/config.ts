import { TPageTitle } from '@app/routes/config/types';
import { TRoute, TRouteKey } from '@brysonandrew/routes';
import { FC } from 'react';

export const ROUTE_ACTIVE_UNDERLINE_KEY =
  'ROUTE_ACTIVE_UNDERLINE';

type TProps = {
  isActive: boolean;
};
export type TPageLinkComponent = FC<TProps>;
export type TPageLinkValue = TRoute<TPageTitle> & {
  Component?: TPageLinkComponent;
};
export type TPageLinkRecord = Record<
  TRouteKey<TPageTitle>,
  TPageLinkValue
>;
export type TPageLinks = TPageLinkValue[];
