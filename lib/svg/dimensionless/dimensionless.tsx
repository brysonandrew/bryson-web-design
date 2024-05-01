import type { TChildren } from '@brysonandrew/config-types/dom';
import type { FC, SVGProps } from 'react';

type TProps = {
  children: TChildren;
} & SVGProps<SVGSVGElement>;
export const SvgWrap: FC<TProps> = ({
  children,
  ...props
}) => (
  <svg width='0%' height='0%' {...props}>
    {children}
  </svg>
);
