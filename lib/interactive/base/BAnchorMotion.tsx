import {
  TAnchorProps,
  TClassValueProps,
  TInteractiveProps,
} from '@brysonandrew/config-types';
import { resolveAccessibilityHrefTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityHrefTitles';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { FC } from 'react';

const Root = styled.a``;

export type TBAnchorMotionProps = TAnchorProps &
  TClassValueProps &
  TInteractiveProps;
export const BAnchorMotion: FC<TBAnchorMotionProps> = (props) => {
  const {
    classValue,
    children,
    shape = 'interactive-rect',
    look,
    target = '_blank',
    ...rest
  } = props;
  return (
    <Root
      type='button'
      target={target}
      className={clsx(
        'interactive',
        look,
        shape,
        classValue,
      )}
      {...resolveAccessibilityHrefTitles(props)}
      {...rest}
    >
      {children}
    </Root>
  );
};
