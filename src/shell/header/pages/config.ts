import { TPageTitle } from '@app/routes';
import { TPage, TPageKey } from '@brysonandrew/routes';
import { FC } from 'react';

export const PAGE_ACTIVE_UNDERLINE_KEY =
  'PAGE_ACTIVE_UNDERLINE';

type TProps = {
  isActive: boolean;
};
export type TPageLinkComponent = FC<TProps>;
export type TPageLinkValue = TPage<TPageTitle> & {
  Component?: TPageLinkComponent;
};
export type TPageLinkRecord = Record<
  TPageKey<TPageTitle>,
  TPageLinkValue
>;
export type TPageLinks = TPageLinkValue[];
