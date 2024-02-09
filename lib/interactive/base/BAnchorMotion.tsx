import {
  TAnchorProps,
  TClassValueProps,
  TInteractiveProps,
} from '@brysonandrew/config-types';
import { resolveInteractiveHrefLabels } from '@brysonandrew/utils-attributes/resolveInteractiveHrefLabels';
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
      {...resolveInteractiveHrefLabels(props)}
      {...rest}
    >
      {children}
    </Root>
  );
};
