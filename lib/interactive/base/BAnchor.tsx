import {
  TAnchorProps,
  TInteractiveProps,
} from '@brysonandrew/config-types';
import { resolveAccessibilityHrefTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityHrefTitles';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

export type TBAnchorProps = TAnchorProps &
  TInteractiveProps;
export const BAnchor: FC<TBAnchorProps> = (props) => {
  const {
    classValue,
    children,
    shape = 'interactive-rect',
    look,
    target = '_blank',
    ...rest
  } = props;
  return (
    <a
      type='button'
      target={target}
      className={cx(
        'interactive',
        look,
        shape,
        classValue,
      )}
      {...resolveAccessibilityHrefTitles(props)}
      {...rest}
    >
      {children}
    </a>
  );
};
