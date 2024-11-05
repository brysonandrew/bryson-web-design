import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { Fade, TFadeProps } from '.';

type TProps = TFadeProps;
export const FadeRight: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={cx(
      'left-0 inset-y-0',
      classValue,
    )}
    {...props}
  />
);
