import { TBlankC } from '@brysonandrew/layout-blank/config/types';
import { cx } from 'class-variance-authority';

export const Blank: TBlankC = ({ dark, ...props }) => {
  const { classValue: darkClassValue, ...darkRest } =
    dark ?? props;
  const { classValue, ...rest } = props;
  return (
    <>
      <div
        className={cx('opacity-dark', darkClassValue)}
        {...darkRest}
      />
      <div
        className={cx('opacity-light', classValue)}
        {...rest}
      />
    </>
  );
};
export * from './config/types';
export * from './motion';
