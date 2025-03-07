import { TClassValue } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import { FC, SVGAttributes } from 'react';

type TProps = SVGAttributes<SVGSVGElement> & {
  classValue?: TClassValue;
};
export const Cross: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <svg
    className={cx(classValue)}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </svg>
);
