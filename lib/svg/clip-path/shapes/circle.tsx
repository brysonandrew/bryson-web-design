import type { FC } from 'react';
import { TSvgCircleProps } from '@brysonandrew/config-types';
import { ClipWrap } from '@brysonandrew/svg-clip-path/ClipWrap';

type TProps = TSvgCircleProps & {
  clipPathId: string;
  halfSize?: number;
};
export const Circle: FC<TProps> = ({
  clipPathId,
  halfSize,
  ...props
}) => {
  return (
    <ClipWrap clipPathId={clipPathId}>
      <circle
        cx={halfSize}
        cy={halfSize}
        r={halfSize}
        {...props}
      />
    </ClipWrap>
  );
};
