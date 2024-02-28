import { TTTitleToKebab } from '@brysonandrew/config-types';
import { RouteObject } from 'react-router';

export type TRouteObject = RouteObject;
export type TRouteObjects = TRouteObject[];

export type TRouteKey<T extends string> = TTTitleToKebab<T>;

export type TPath<T extends string = string> =
  | `/${T}`
  | '/';

export type TRoutePath<
  T extends string,
  B extends TPath<string> = TPath<string>,
> = TPath<T> | `${B}${TPath<T>}`;

export type TRoute<
  T extends string,
  B extends TPath<string> = TPath<string>,
> = {
  key: TRouteKey<T>;
  title: T;
  path: B | TRoutePath<T, B>;
};

export type TRoutes<
  T extends string,
  B extends TPath<string> = TPath<string>,
> = TRoute<T, B>[];

export type TRouteRecord<
  T extends string,
  B extends TPath<string> = TPath<string>,
> = Record<TRouteKey<T>, TRoute<T, B>>;

export type TRouteEntry<
  T extends string,
  B extends TPath<string> = TPath<string>,
> = [TTTitleToKebab<T>, TRoute<T, B>];

export type TRouteEntries<T extends string> =
  TRouteEntry<T>[];
