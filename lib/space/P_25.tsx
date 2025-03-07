import { FC } from 'react';
import { TSpaceProps } from '@brysonandrew/space';
import { Space } from '.';

type TProps = TSpaceProps;
export const P_25: FC<TProps> = (props) => (
  <Space spaceClass='p-0.25' {...props} />
);
