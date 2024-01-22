import { useLocation } from 'react-router';

export const useHtmlTitle = <
  K extends string,
  V extends string,
>(
  description: string,
  lookup: Record<K, V>,
) => {
  const { pathname } = useLocation();

  const route = lookup[pathname as K];
  const titles = [description, route].filter(Boolean);

  return titles;
};
