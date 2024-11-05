import { TSvgProps } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import type { FC } from 'react';

type TProps = TSvgProps;
export const React: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24px'
    height='24px'
    viewBox='-11.5 -10.23174 23 20.46348'
    className={cx(classValue)}
    {...props}
  >
    <title>React.js</title>
    <circle cx='0' cy='0' r='2.05' fill='#61dafb' />
    <g stroke='#61dafb' strokeWidth='1' fill='none'>
      <ellipse rx='11' ry='4.2' />
      <ellipse rx='11' ry='4.2' transform='rotate(60)' />
      <ellipse rx='11' ry='4.2' transform='rotate(120)' />
    </g>
  </svg>
);
