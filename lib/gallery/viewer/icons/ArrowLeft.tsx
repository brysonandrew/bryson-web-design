import { TClassValue } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

type TProps = {
  classValue?: TClassValue;
};
export const ArrowLeft: FC<TProps> = ({ classValue }) => (
  <svg
    className={cx(classValue)}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='28'
    height='28'
    fill='currentColor'
  >
    <path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
  </svg>
);
