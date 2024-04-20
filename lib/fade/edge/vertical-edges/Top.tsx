import { FadeDownPair } from '@brysonandrew/fade/edge/pairs/FadeDownPair';
import { TDivProps } from '@brysonandrew/config-types';
import { FC } from 'react';

type TProps = TDivProps;
export const Top: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => (
  <div
    className='fixed top-0 w-full z-0  pointer-events-none'
    style={{ height: '16vh', ...style }}
    {...props}
  >
    <FadeDownPair />
  </div>
);
