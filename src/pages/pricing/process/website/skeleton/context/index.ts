import { createContext } from 'react';

export type TContext = {
  isDarkMode?: boolean;
  isSplashScreen?: boolean;
};
export const Context = createContext({} as TContext);
