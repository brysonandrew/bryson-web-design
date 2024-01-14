import { createContext } from 'react';

export type TContext = { isDarkMode: boolean };
export const Context = createContext({} as TContext);
