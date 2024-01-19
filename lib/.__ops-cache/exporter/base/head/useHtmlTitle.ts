import {
  TITLE_KEY_DELIMITER,
  resolveCompositeTitle,
} from '@brysonandrew/base/utils/key';
import { useLocation } from 'react-router';
import { capitalize } from '@brysonandrew/base/utils/format';
import { useCurrParams } from '@brysonandrew/gallery/viewer/hooks/params/useCurrParams';

export const useHtmlTitle = <
  K extends string,
  V extends string,
>(
  lookup: Record<K, V>,
) => {
  const { pathname } = useLocation();
  const currParams = useCurrParams();
  const { project, name } = currParams;

  const route = lookup[pathname as K];
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
