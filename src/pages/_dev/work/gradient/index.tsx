import type { FC } from 'react';
import { SvgWrap } from '@brysonandrew/svg-dimensionless';
import { COLOR_RECORD } from '@app/color';
export const LINEAR_GRADIENT_SVG_ID =
  'LINEAR_GRADIENT_SVG_ID';

export const WorkGradient: FC = () => {
  return (
    <SvgWrap className="absolute">
      <linearGradient
        id={LINEAR_GRADIENT_SVG_ID}
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        {[COLOR_RECORD['gray-1'], COLOR_RECORD['gray-4']].map(
          (color, index, { length: count }) => (
            <stop
              key={`${index}`}
              offset={`${(100 / (count - 1)) * index}%`}
              stopColor={color}
            />
          )
        )}
      </linearGradient>
    </SvgWrap>
  );
};
