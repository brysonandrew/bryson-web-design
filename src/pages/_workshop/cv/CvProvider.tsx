import {
  PropsWithChildren,
  useContext,
  createContext,
} from 'react';
import type { FC } from 'react';

const BASE_INIT = {
  name: '',
  jobTitle: '',
  url: '',
  email: '',
  phone: {
    display: '',
    withTrunk: '',
  },
};

const INIT = {
  ...BASE_INIT,
  descriptionParagraphs: [],
  sections: [],
};

export type TCvSection = {
  title: string;
  description: string;
  tags: string[];
  paragraphs: string[];
};

type TCvContext = typeof BASE_INIT & {
  descriptionParagraphs: string[];
  sections: any[];
};

const CV = createContext<TCvContext>(INIT);

export const useCv = (): TCvContext =>
  useContext<TCvContext>(CV);

export const CvProvider: FC<
  PropsWithChildren<Partial<TCvContext>>
> = ({ children, ...value }) => {
  const cvValue = useCv();

  return (
    <CV.Provider value={{ ...cvValue, ...value }}>
      {children}
    </CV.Provider>
  );
};
