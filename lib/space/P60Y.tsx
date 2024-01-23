import { FC } from 'react';
import { TSpaceProps } from '@brysonandrew/space';
import { Space } from '.';

type TProps = TSpaceProps;
export const P60Y: FC<TProps> = (props) => <Space spaceClass='py-60' {...props} />;
