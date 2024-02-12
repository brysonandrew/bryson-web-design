import { WORKSHOP_PATH_BASE } from '@app/routes/workshop/config/constants';
import {
  TLinkProps,
  TTTitleToKebab,
} from '@brysonandrew/config-types';
import * as WorkshopPages from '@pages/_workshop';
import { RouteObject } from 'react-router';

export type TWorkshopPages = typeof WorkshopPages;
export type TWorkshopPageTitle = keyof TWorkshopPages;
export type TWorkshopPage =
  TWorkshopPages[TWorkshopPageTitle];

export type TWorkshopPageKey =
  TTTitleToKebab<TWorkshopPageTitle>;

export type TEntry = [TWorkshopPageTitle, TWorkshopPage];
export type TEntries = TEntry[];

export type TWorkshopPathBase = typeof WORKSHOP_PATH_BASE;
export type TWorkshopPagePath =
  `${TWorkshopPathBase}/${TWorkshopPageKey}`;

export type TWorkshopRecord = {
  linkProps: TLinkProps[];
  routes: RouteObject[];
};
