import {
  PropsWithChildren,
  useContext,
  createContext,
} from 'react';
import type { FC } from 'react';
import { TCvContext } from '@brysonandrew/cv/config/types';
import { CV_INIT } from '@brysonandrew/cv/config/constants';

const CV = createContext<TCvContext>(CV_INIT);

export const useCv = (): TCvContext =>
  useContext<TCvContext>(CV);

export const CvProvider: FC<
  PropsWithChildren<Partial<TCvContext>>
> = ({ children, ...props }) => {
  const cvValue = useCv();
  const values = { ...cvValue, ...props };
  return (
    <CV.Provider value={values}>{children}</CV.Provider>
  );
}; 
