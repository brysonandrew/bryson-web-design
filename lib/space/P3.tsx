import { FC } from 'react';
import { TSpaceProps } from '@brysonandrew/space';
import { Space } from '.';

type TProps = TSpaceProps;
export const P3: FC<TProps> = (props) => <Space spaceClass='p-3' {...props} />;
