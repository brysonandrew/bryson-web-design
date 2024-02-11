import { FC, PropsWithChildren } from 'react';
import { ReaderProvider } from '../context/ReaderProvider';

type TProps = PropsWithChildren;
export const ReaderShell: FC<TProps> = ({ children }) => {
  return <ReaderProvider>{children}</ReaderProvider>;
};
