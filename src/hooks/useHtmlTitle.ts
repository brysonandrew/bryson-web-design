import { TITLE_BASE } from '@constants/copy';
import { resolveCompositeTitle } from '@utils/keys';
import { useCurrParams } from './params/useCurrParams';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { capitalize } from '@utils/format';

const PROJECTS_TITLE = 'Projects';

const TITLE_FROM_PATHNAME_LOOKUP: Record<
  string,
  string | null
> = {
  '/': 'Web Developer',
  '/projects': PROJECTS_TITLE,
  '/contact': 'Contact',
};

export const useHtmlTitle = () => {
  const { pathname } = useLocation();
  const currParams = useCurrParams();
  const { project, name } = currParams;
  const route = TITLE_FROM_PATHNAME_LOOKUP[pathname];
  const titles = [TITLE_BASE, route].filter(Boolean);
  const title = project
    ? `Project / ${capitalize(project)} [ ${name} ]`
    : resolveCompositeTitle(...titles);
  useEffect(() => {
    document.title = title;
  }, [title]);
};
