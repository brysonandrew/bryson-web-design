import clsx from 'clsx';
import { FC } from 'react';
import { TFadeProps, Fade } from '.';

type TProps = TFadeProps;
export const FadeUp: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={clsx(
      'bottom-0 inset-x-0',
      classValue,
    )}
    {...props}
  />
);
