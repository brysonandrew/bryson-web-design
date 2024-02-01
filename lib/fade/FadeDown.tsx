import clsx from 'clsx';
import { FC } from 'react';
import { Fade, TFadeProps } from '.';

type TProps = TFadeProps;
export const FadeDown: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={clsx('top-0 inset-x-0', classValue)}
    {...props}
  />
);
