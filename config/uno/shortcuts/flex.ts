import type { StaticShortcutMap } from 'unocss';

export const FLEX: StaticShortcutMap = {
  row: 'flex flex-row items-center',
  'row-wrap': 'flex flex-row items-center flex-wrap',
  'row-start': 'flex flex-row items-start',
  'row-end': 'flex flex-row items-end',
  'row-start-end': 'row-start justify-end',
  'row-space': 'row justify-between',
  'row-start-space': 'row-start justify-between',
  'row-base': 'flex flex-row items-baseline',
  column: 'flex flex-col items-center',
  'column-start': 'flex flex-col items-start',
  'column-end': 'flex flex-col items-end',
  'column-end-reverse': 'flex flex-col-reverse items-end',
  'column-start-end': 'column-start justify-end',
  'column-center-end': 'column justify-end',
  'column-start-center': 'column-start justify-center',
  'column-space': 'column justify-between',
  center: 'flex items-center justify-center',
};
