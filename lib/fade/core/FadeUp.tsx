import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { TFadeProps, Fade } from '.';

type TProps = TFadeProps;
export const FadeUp: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={cx(
      'bottom-0 inset-x-0',
      classValue,
    )}
    {...props}
  />
);
