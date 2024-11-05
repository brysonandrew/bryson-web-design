import { TClassValue } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import type { FC } from 'react';

type TProps = {
  classValue?: TClassValue;
};
export const Plus: FC<TProps> = ({ classValue }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
  >
    <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
  </svg>
);
