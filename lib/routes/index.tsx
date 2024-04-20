import { resolveRoute } from './resolveRoute';
import {
  IndexRouteObject,
  NonIndexRouteObject,
  RouteObject,
} from 'react-router';
import { ComponentType } from 'react';
import { TLinkProps } from '@brysonandrew/config-types';
import {
  TPath,
  TRoute,
  TRouteObjects,
  TRouteRecord,
  TRoutes,
} from '@brysonandrew/routes/config/types';

export type TBaseRouteRecord = {
  linkProps: TLinkProps[];
  routes: RouteObject[];
};

export const resolveRouteRecords = <
  T extends string,
  P extends Record<T, null | ComponentType>,
>(
  pageTitles: readonly T[],
  PageDirectory: P,
  base: TPath<string> = '/',
) => {
  const result = pageTitles.reduce(
    (a, title: T) => {
      const page: TRoute<T> = resolveRoute<typeof title>(
        title,
        base,
      );
      const { key, path } = page;
      const Component = PageDirectory[title];
      if (path === '/') {
        const indexRoute: IndexRouteObject = {
          index: true,
          path,
          Component,
        };
        a.routes.push(indexRoute);
      } else {
        const route: NonIndexRouteObject = {
          index: false,
          path,
          Component,
        };
        a.routes.push(route);
      }

      return { ...a, record: { ...a.record, [key]: page } };
    },
    {
      record: {} as TRouteRecord<T>,
      routes: [] as TRouteObjects,
      values: [] as TRoutes<T>,
      menuItems: [] as TLinkProps[],
    },
  );

  return result;
};

export * from './resolveRoute';
export * from './config/types';
export * from './not-found/RedirectLink';
