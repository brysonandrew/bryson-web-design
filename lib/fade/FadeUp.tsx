import clsx from 'clsx';
import { FC } from 'react';
import { TBaseProps, Fade } from '.';

type TProps = TBaseProps;
export const FadeUp: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={clsx(
      'bg-gradient-to-t bottom-0',
      classValue,
    )}
    {...props}
  />
);
