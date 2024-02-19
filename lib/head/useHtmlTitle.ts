import { useApp } from '@brysonandrew/app';
import { useLocation } from 'react-router';

type TConfig<K extends string, V extends string> = {
  lookup: Record<K, V>;
};
export const useHtmlTitle = <
  K extends string,
  V extends string = string,
>({
  lookup,
}: TConfig<K, V>) => {
  const { APP_DESCRIPTION } = useApp();
  const { pathname } = useLocation();

  const route: V = lookup[pathname as K];
  const titles = [APP_DESCRIPTION, route].filter(Boolean);

  return titles;
};
