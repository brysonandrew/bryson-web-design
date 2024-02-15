import {
  TEntries,
  TEntry,
  TDevPagePath,
  TDevRecord,
} from '@app/routes/dev/config/types';
import { titleToKebab } from '@brysonandrew/utils-format';
import * as DevPages from '@pages/_dev';

export const DEV_PATH_BASE = '/dev';

const entries = Object.entries(DevPages) as TEntries;
export const DEV_RECORD = entries.reduce(
  (a, [title, Component]: TEntry) => {
    const key = titleToKebab<typeof title>(title);
    const path: TDevPagePath =
      `${DEV_PATH_BASE}/${key}` as const;
    a.routes.push({
      path,
      Component,
    });
    a.linkProps.push({ to: path, title });
    return a;
  },
  { routes: [], linkProps: [] } as TDevRecord,
);
