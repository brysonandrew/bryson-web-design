import { TITLE_BASE } from '@constants/copy';
import { resolveCompositeTitle } from '@utils/keys';
import { useCurrParams } from './params/useCurrParams';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { capitalize } from '@utils/format';

const TITLE_FROM_PATHNAME_LOOKUP: Record<
  string,
  string | null
> = {
  '/': 'Web Developer'.toUpperCase(),
  '/projects': 'Projects'.toUpperCase(),
  '/contact': 'Contact'.toUpperCase(),
};

export const useHtmlTitle = () => {
  const { pathname } = useLocation();
  const currParams = useCurrParams();
  const { project, name } = currParams;
  const route = TITLE_FROM_PATHNAME_LOOKUP[pathname];
  const titles = (
    project
      ? [capitalize(project), name]
      : [TITLE_BASE.toUpperCase(), route]
  ).filter(Boolean);
  const title = resolveCompositeTitle(...titles);
  useEffect(() => {
    document.title = title;
  }, [title]);
};
