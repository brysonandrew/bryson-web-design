import { FC, PropsWithChildren } from 'react';
import { Provider } from '../context/Provider';
import { GlobalColor } from '@app/color';

import 'virtual:uno.css';

type TProps = PropsWithChildren;
export const Shell: FC<TProps> = ({ children }) => {
  return (
    <>
      <GlobalColor />
      <Provider>{children}</Provider>
    </>
  );
};
