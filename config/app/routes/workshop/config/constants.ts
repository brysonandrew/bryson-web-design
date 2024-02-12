import {
  TEntries,
  TEntry,
  TWorkshopPagePath,
  TWorkshopRecord,
} from '@app/routes/workshop/config/types';
import { titleToKebab } from '@brysonandrew/utils-format';
import * as WorkshopPages from '@pages/_workshop';

export const WORKSHOP_PATH_BASE = '/workshop';

const entries = Object.entries(WorkshopPages) as TEntries;
export const WORKSHOP_RECORD = entries.reduce(
  (a, [title, Component]: TEntry) => {
    const key = titleToKebab<typeof title>(title);
    const path: TWorkshopPagePath =
      `${WORKSHOP_PATH_BASE}/${key}` as const;
    a.routes.push({
      path,
      Component,
    });
    a.linkProps.push({ to: path, title });
    return a;
  },
  { routes: [], linkProps: [] } as TWorkshopRecord,
);
