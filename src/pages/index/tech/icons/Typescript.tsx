import { TSvgProps } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import type { FC } from 'react';

type TProps = TSvgProps;
export const Typescript: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <svg
    width='20px'
    height='20px'
    fill='#007ACC'
    viewBox='0 0 256.000000 256.000000'
    className={cx(classValue)}
    {...props}
  >
    <title>Typescript</title>
    <rect width='100%' height='100%' fill='#ffffff' />
    <path d='M0 128v128h256V0H0v128zm157-4.5V135h-33v105H97V135H64v-23h93v11.5zm65-10.1c4.1.8 8.7 1.9 10.3 2.5l2.7 1.1v12.5c0 6.9-.2 12.5-.4 12.5s-2.3-1.1-4.7-2.4c-9-5.1-23.4-7-32.2-4.4-2.1.6-5.2 2.5-6.8 4.1-2.4 2.3-2.9 3.7-2.9 7.4 0 4 .5 5.1 3.8 8.2 2.1 2 9.9 6.6 17.5 10.4 16 7.9 24.1 14.6 27.8 22.9 3.3 7.4 3.4 23 .2 30-3 6.6-9.6 13.3-16.1 16.4-13.8 6.5-36.3 7.1-53.9 1.3l-6.3-2.1V206l5 3.6c6.5 4.7 14.9 7.6 23.7 8.2 8.8.6 15.3-1 19.3-4.8 2.5-2.3 3-3.6 3-7.4 0-7.3-4.2-11.1-21.4-19.5-15.2-7.5-20-10.9-24.5-17.5-10-14.5-7-36.7 6.4-46.8 11.4-8.7 30.3-11.9 49.5-8.4z' />
  </svg>
);
