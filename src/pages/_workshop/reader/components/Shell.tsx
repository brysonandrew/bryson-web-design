import { FC, PropsWithChildren } from 'react';
import { Provider } from '../context/Provider';


type TProps = PropsWithChildren;
export const Shell: FC<TProps> = ({ children }) => {
  return (
    <>
      <Provider>{children}</Provider>
    </>
  );
};
