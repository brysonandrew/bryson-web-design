import type * as ICONS from '@brysonandrew/icons-keys';
import type { IconifyIcon, IconifyIconName } from '@iconify/react';

export type TIconRecord = typeof ICONS;
export type TIconKey = keyof TIconRecord;
export type TIconValue =
  | TIconRecord[TIconKey]
  | string
  | IconifyIconName;
