import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { Fade, TFadeProps } from '.';

type TProps = TFadeProps;
export const FadeDown: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Fade
    classValue={cx('top-0 inset-x-0', classValue)}
    {...props}
  />
);
