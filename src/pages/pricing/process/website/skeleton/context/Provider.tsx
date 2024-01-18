import { FC, PropsWithChildren } from 'react';
import { Context, TContext } from '.';

export const Provider: FC<PropsWithChildren<TContext>> = ({
  children,
  ...value
}) => {
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
