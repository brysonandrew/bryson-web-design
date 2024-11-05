import { APP_TITLE, APP_VERSION } from '@app/base';
const path = '_dev/work';
export const resolveKey = (tail: string) =>
  `${APP_TITLE}${APP_VERSION}:${path}:${tail}`;
