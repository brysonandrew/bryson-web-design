import type { FC } from 'react';
import { TSvgCircleProps } from '@brysonandrew/config-types';
import { SvgWrap } from '@brysonandrew/svg/SvgWrap';

type TProps = TSvgCircleProps & {
  clipPathId: string;
  halfSize?: number;
};
export const ClipWrap: FC<TProps> = ({
  clipPathId,
  halfSize,
  ...props
}) => {
  return (
    <SvgWrap>
      <clipPath id={clipPathId}>
        <circle
          cx={halfSize}
          cy={halfSize}
          r={halfSize}
          {...props}
        />
      </clipPath>
    </SvgWrap>
  );
};
