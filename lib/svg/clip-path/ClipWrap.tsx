import type { FC } from 'react';
import { TSvgClipPathProps } from '@brysonandrew/config-types';
import { SvgWrap } from '@brysonandrew/svg/SvgWrap';

type TProps = TSvgClipPathProps & {
  clipPathId: string;
  halfSize?: number;
};
export const ClipWrap: FC<TProps> = ({
  clipPathId,
  halfSize,
  children,
  ...props
}) => {
  return (
    <SvgWrap>
      <clipPath id={clipPathId} {...props}>
        {children}
      </clipPath>
    </SvgWrap>
  );
};
