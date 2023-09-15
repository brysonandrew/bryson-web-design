import { TChildren } from '@t/index';
import { Title } from './Title';
import { FC } from 'react';
type TProps = { left: TChildren; right: TChildren };
export const Header: FC<TProps> = ({ left, right }) => {
  return (
    <header className='row-space'>
      <Title>{left}</Title>
      <samp>{right}</samp>
    </header>
  );
};
