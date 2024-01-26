import clsx from 'clsx';
import { FC } from 'react';
import { Fade, TBaseProps } from '.';

type TProps = TBaseProps;
export const FadeDown: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={clsx('bg-gradient-to-b top-0', classValue)}
    {...props}
  />
);
