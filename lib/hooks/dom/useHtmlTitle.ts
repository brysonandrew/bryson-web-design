import {
  TITLE_KEY_DELIMITER,
  resolveCompositeTitle,
} from '@lib/utils/key';
import { useCurrParams } from '@pages/projects/gallery/hooks/params/useCurrParams';
import { useLocation } from 'react-router';
import { capitalize } from '@lib/utils/format';
import { useEffect } from 'react';
import { APP_DESCRIPTION } from '@app/base/constants';
import { PAGE_NAV_VALUES } from '@app/routes/constants/pages';

const TITLE_FROM_PATHNAME_LOOKUP: Record<
  string,
  string | null
> = {
  '/': APP_DESCRIPTION,
  ...PAGE_NAV_VALUES.reduce(
    (a, { path, title }) => ({ ...a, [path]: title }),
    {},
  ),
};

export const useHtmlTitle = () => {
  const { pathname } = useLocation();
  const currParams = useCurrParams();
  const { project, name } = currParams;
  const route = TITLE_FROM_PATHNAME_LOOKUP[pathname];
  const titles = ['Bryson Web Design', route].filter(
    Boolean,
  );
  const title = project
    ? `Project${TITLE_KEY_DELIMITER}${capitalize(
        project,
      )}${TITLE_KEY_DELIMITER}${name}`
    : resolveCompositeTitle(...titles);


  return title;
};
