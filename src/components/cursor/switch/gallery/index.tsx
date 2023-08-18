import { Gallery as Icon } from '@components/icons/gallery/Gallery';
import { FC } from 'react';
import { IconWithText } from '../IconWithText';

type TProps = { children?: string };
export const Gallery: FC<TProps> = ({ children }) => {
  return (
    <IconWithText Icon={Icon}>
      View in image gallery
    </IconWithText>
  );
};
