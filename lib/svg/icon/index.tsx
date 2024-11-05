import type {
  FC,
  SVGAttributes,
} from 'react';
import { resolveSquare } from '@brysonandrew/measure';
import {
  TClassValueProps,
  TSvgProps,
} from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';

export type TIconsSvgProps = Omit<
  TSvgProps,
  'fill' | 'd'
> &
  TClassValueProps & {
    svgProps?: TSvgProps;
    pathProps?: SVGAttributes<SVGPathElement>;
    size?: number;
    fill?: string;
    d?: string;
  };
export const IconsSvg: FC<
  TIconsSvgProps
> = ({
  svgProps,
  pathProps,
  className,
  classValue,
  size,
  fill,
  d,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cx(
        className,
        classValue
      )}
      {...resolveSquare(size ?? 24)}
      viewBox='0 0 24 24'
      {...svgProps}
      {...props}
    >
      <path
        d={d}
        fill={fill}
        {...pathProps}
      />
    </svg>
  );
};

export * from './160';
export * from './24';
export * from './28';
export * from './40';