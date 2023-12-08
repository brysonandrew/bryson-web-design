import { Variables } from '@css/Variables';
import { Provider } from '../context/Provider';

import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';
import { FC, PropsWithChildren } from 'react';

type TProps = PropsWithChildren;
export const Shell: FC<TProps> = ({children}) => {
  return (
    <>
      <Variables />
      <Provider>
        {children}
      </Provider>
    </>
  );
};
