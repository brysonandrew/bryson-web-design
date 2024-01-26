import clsx from 'clsx';
import { FC } from 'react';
import { Fade, TBaseProps } from '.';

type TProps = TBaseProps;
export const FadeLeft: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={clsx('bg-gradient-to-r left-0', classValue)}
    {...props}
  />
);
