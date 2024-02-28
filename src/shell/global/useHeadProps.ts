import { PAGE_RECORDS } from '@app/routes';
import { useCurrParams } from '@brysonandrew/gallery';
import {
  TTitlesResolver,
  TITLE_KEY_DELIMITER,
  resolveCompositeTitle,
} from '@brysonandrew/head';
import { capitalize } from '@brysonandrew/utils-format';

export const useHeadProps = () => {
  const { name, project } = useCurrParams();
  const pageValues = Object.values(PAGE_RECORDS.record);
  const titlesResolver: TTitlesResolver = (
    titles: string[],
  ) =>
    project
      ? `Project${TITLE_KEY_DELIMITER}${capitalize(
          project,
        )}${TITLE_KEY_DELIMITER}${name}`
      : resolveCompositeTitle(...titles);

  return { pageValues, titlesResolver };
};
