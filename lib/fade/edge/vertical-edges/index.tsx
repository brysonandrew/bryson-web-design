import { FC } from 'react';
import { Top } from '@brysonandrew/fade-edge/vertical-edges/Top';
import { Bottom } from '@brysonandrew/fade-edge/vertical-edges/Bottom';
import { TDivProps } from '@brysonandrew/config-types';

type TProps = {
  top?: TDivProps;
  bottom?: TDivProps;
};
export const VerticalEdges: FC<TProps> = ({
  top,
  bottom,
}) => (
  <>
    <Top {...top} />
    <Bottom {...bottom} />
  </>
);
