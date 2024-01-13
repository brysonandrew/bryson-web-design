import { useContext } from 'react';
import { Context } from '.';

type TConfig = any;
export const useSkeletonC = (config?: TConfig) => {
  const context = useContext(Context);
  return context;
};
