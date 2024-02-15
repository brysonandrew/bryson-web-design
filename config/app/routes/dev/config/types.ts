import { DEV_PATH_BASE } from '@app/routes/dev/config/constants';
import {
  TLinkProps,
  TTTitleToKebab,
} from '@brysonandrew/config-types';
import * as DevPages from '@pages/_dev';
import { RouteObject } from 'react-router';

export type TDevPages = typeof DevPages;
export type TDevPageTitle = keyof TDevPages;
export type TDevPage =
  TDevPages[TDevPageTitle];

export type TDevPageKey =
  TTTitleToKebab<TDevPageTitle>;

export type TEntry = [TDevPageTitle, TDevPage];
export type TEntries = TEntry[];

export type TDevPathBase = typeof DEV_PATH_BASE;
export type TDevPagePath =
  `${TDevPathBase}/${TDevPageKey}`;

export type TDevRecord = {
  linkProps: TLinkProps[];
  routes: RouteObject[];
};
