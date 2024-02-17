import { TPageRecord, TPage } from './types';
import { resolvePage } from './resolvePage';

export const resolvePageRecords = <
  T extends string,
  P extends Record<T, unknown>,
>(
  pageTitles: readonly T[],
  PageDirectory: P,
) => {
  const PAGE_RECORD = pageTitles.reduce((a, title) => {
    const page = resolvePage<typeof title>(title);
    return { ...a, ...page };
  }, {} as TPageRecord<T>);

  const PAGE_VALUES: TPage<T>[] =
    Object.values(PAGE_RECORD);

  const PAGES_ROUTES = PAGE_VALUES.map(
    ({ title, path }: TPage<T>) => {
      const Component = PageDirectory[title];
      return {
        index: path === '/',
        path,
        Component,
      };
    },
  );

  return { PAGE_RECORD, PAGE_VALUES, PAGES_ROUTES };
};

export * from '@brysonandrew/link-list';
export * from '@brysonandrew/not-found';
export * from './resolvePage';
export * from './types';
