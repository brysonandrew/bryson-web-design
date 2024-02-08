import { FC, PropsWithChildren } from 'react';
import { ReaderProvider } from '../context/ReaderProvider';

type TProps = PropsWithChildren;
export const Shell: FC<TProps> = ({ children }) => {
  return <ReaderProvider>{children}</ReaderProvider>;
};
