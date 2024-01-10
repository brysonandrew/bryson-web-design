import { FC, PropsWithChildren } from 'react';
import { Variables } from '@css/Variables';
import { Provider } from '../context/Provider';
import 'virtual:uno.css';
import '@css/globals.css';

type TProps = PropsWithChildren;
export const Shell: FC<TProps> = ({ children }) => {
  return (
    <>
      <Variables />
      <Provider>{children}</Provider>
      
    </>
  );
};
