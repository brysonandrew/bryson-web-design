import { TElementProps } from '@brysonandrew/config-types/dom';

export type TInteractiveLabelProps = Required<
  Pick<TElementProps, 'title' | 'aria-label'>
>;

export const resolveAccessibilityTitles = (
  title: string,
): TInteractiveLabelProps => ({
  title,
  'aria-label': title,
});
