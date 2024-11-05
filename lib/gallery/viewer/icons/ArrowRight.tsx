import { TClassValue } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

type TProps = {
  classValue?: TClassValue;
};
export const ArrowRight: FC<TProps> = ({ classValue }) => (
  <svg
    className={cx(classValue)}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='28'
    height='28'
    fill='currentColor'
  >
    <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
  </svg>
);
