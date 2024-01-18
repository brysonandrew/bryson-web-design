import { FC, PropsWithChildren } from 'react';
import { Left } from './Left';
import { Right } from './Right';
import { Shell } from './Shell';

type TProps = PropsWithChildren;
export const Header: FC<TProps> = ({ children }) => {
  return (
    <Shell>
      {children}
      <Left />
      <Right />
    </Shell>
  );
};
