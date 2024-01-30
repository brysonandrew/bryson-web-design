import clsx from 'clsx';
import { FC } from 'react';
import { Fade, TFadeProps } from '.';

type TProps = TFadeProps;
export const FadeLeft: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={clsx(
      'bg-gradient-to-l right-0 inset-y-0',
      classValue,
    )}
    {...props}
  />
);
