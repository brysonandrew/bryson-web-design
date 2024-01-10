import {
  TITLE_KEY_DELIMITER,
  resolveCompositeTitle,
} from '@utils/keys';
import { useCurrParams } from '../params/useCurrParams';
import { useLocation } from 'react-router';
import { capitalize } from '@utils/format';
import { useEffect } from 'react';
import { APP_DESCRIPTION, APP_TITLE } from '@app/index';
import { PAGE_TUPLES } from '@app/routes/app';

const TITLE_FROM_PATHNAME_LOOKUP: Record<
  string,
  string | null
> = {
  '/': APP_DESCRIPTION,
  ...PAGE_TUPLES.reduce(
    (a, [key, title]) => ({ [key]: title }),
    {},
  ),
};

export const useHtmlTitle = () => {
  // const prevTimestampRef = useRef(0);
  const { pathname } = useLocation();
  const currParams = useCurrParams();
  const { project, name } = currParams;
  const route = TITLE_FROM_PATHNAME_LOOKUP[pathname];
  const titles = [APP_TITLE, route].filter(Boolean);
  const title = project
    ? `Project${TITLE_KEY_DELIMITER}${capitalize(
        project,
      )}${TITLE_KEY_DELIMITER}${name}`
    : resolveCompositeTitle(...titles);

  useEffect(() => {
    // const fetchIp = async () => {
    //   const ip = await fetch(
    //     'https://api.ipify.org?format=json',
    //   );
    //   console.log(ip);
    //   const json = await ip.json();
    //   console.log(json);
    // };
    // fetchIp();
    // const insertEntry = async () => {
    //   try {
    //     const { count, data, error } = await execute({
    //       title,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // const timestamp = Date.now();
    // const prevTimestamp = prevTimestampRef.current;
    // const diff = timestamp - prevTimestamp;
    // if (diff > 1000 && !import.meta.env.DEV) {
    //   insertEntry();
    // }
  }, [title]);
  return title;
};
