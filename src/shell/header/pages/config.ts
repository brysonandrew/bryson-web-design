import { TPage, TPageKey } from '@app/routes/types';
import { FC } from 'react';

export const PAGE_ACTIVE_UNDERLINE_KEY =
  'PAGE_ACTIVE_UNDERLINE';

type TProps = {
  isActive: boolean;
};
export type TPageLinkComponent = FC<TProps>;
export type TPageLinkValue = TPage & {
  Component?: TPageLinkComponent;
};
export type TPageLinkRecord = Record<
  TPageKey,
  TPageLinkValue
>;
export type TPageLinks = TPageLinkValue[];
