import { OpenInNew as Icon } from '@components/icons/OpenInNew';
import { FC } from 'react';
import { IconWithText } from '../IconWithText';

type TProps = { children: string };
export const OpenInNew: FC<TProps> = ({ children }) => {
  return (
    <IconWithText Icon={Icon}>{children}</IconWithText>
  );
};
