import clsx from 'clsx';
import { FC } from 'react';
import { Fade, TFadeProps } from '.';

type TProps = TFadeProps;
export const FadeRight: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={clsx(
      'left-0 inset-y-0',
      classValue,
    )}
    {...props}
  />
);
