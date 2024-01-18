import { TElementProps } from 'lib/types/dom';

export type TInteractiveLabelProps = Pick<
  TElementProps,
  'title' | 'aria-label'
>;

export const resolveInteractiveLabels = (
  title: string,
): TInteractiveLabelProps => ({
  title,
  'aria-label': title,
});
