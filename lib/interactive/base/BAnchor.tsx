import {
  TAnchorProps,
  TInteractiveProps,
} from '@brysonandrew/config-types';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { FC } from 'react';

const Root = styled.a``;

export type TBAnchorProps = TAnchorProps &
  TInteractiveProps;
export const BAnchor: FC<TBAnchorProps> = ({
  classValue,
  children,
  shape = 'interactive-rect',
  look,
  target = '_blank',
  ...props
}) => {
  return (
    <Root
      type='button'
      target={target}
      className={clsx(
        'interactive',
        'neu-basic',
        look,
        shape,
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
