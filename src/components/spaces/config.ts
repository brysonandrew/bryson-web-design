import { TClassValueProps } from '@t/react';
import { HTMLProps } from 'react';

export type TSpaceProps = Omit<HTMLProps<HTMLElement>, 'className'> &
  TClassValueProps & {
    element?: keyof JSX.IntrinsicElements;
  };
