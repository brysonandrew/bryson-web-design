import { TBlankC } from '@brysonandrew/layout-blank/config/types';
import clsx from 'clsx';

export const Blank: TBlankC = ({ dark, ...props }) => {
  const { classValue: darkClassValue, ...darkRest } =
    dark ?? props;
  const { classValue, ...rest } = props;
  return (
    <>
      <div
        className={clsx('opacity-dark', darkClassValue)}
        {...darkRest}
      />
      <div
        className={clsx('opacity-light', classValue)}
        {...rest}
      />
    </>
  );
};
export * from './Motion';
export * from './config/types';
