import {
  TITLE_KEY_DELIMITER,
  resolveCompositeTitle,
} from 'lib/utils/key';
import { useLocation } from 'react-router';
import { capitalize } from 'lib/utils/format';
import { useCurrParams } from 'lib/gallery/viewer/hooks/params/useCurrParams';

export const useHtmlTitle = <
  T extends Record<string, string>,
>(
  lookup: T,
) => {
  const { pathname } = useLocation();
  const currParams = useCurrParams();
  const { project, name } = currParams;

  const route = lookup[pathname];
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
