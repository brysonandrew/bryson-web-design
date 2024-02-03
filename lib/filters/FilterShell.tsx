import type { TChildren } from '@brysonandrew/config/types/dom';
import type { FC, SVGProps } from 'react';

type TProps = {
  children: TChildren;
} & SVGProps<SVGSVGElement>;
export const FilterShell: FC<TProps> = ({
  children,
  ...props
}) => (
  <svg
    width='0%'
    height='0%'
    viewBox='0 0 100 100'
    {...props}
  >
    {children}
  </svg>
);
