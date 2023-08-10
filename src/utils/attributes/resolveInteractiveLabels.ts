import { HTMLAttributes } from 'react';

export type TInteractiveLabelProps = Pick<
  HTMLAttributes<HTMLElement>,
  'title' | 'aria-label'
>;

export const resolveInteractiveLabels = (
  title: string,
): TInteractiveLabelProps => ({
  title,
  'aria-label': title,
});
