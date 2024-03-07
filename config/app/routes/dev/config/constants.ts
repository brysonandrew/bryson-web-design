import { TDevPageTitle } from '@app/routes/dev/config/types';
import { TPath } from '@brysonandrew/routes/config/types';
import * as DevPages from '@pages/_dev';

export const DEV_PATH_BASE: TPath<string> = '/dev';
export const DEV_PATH_KEYS = Object.keys(
  DevPages,
) as TDevPageTitle[];
