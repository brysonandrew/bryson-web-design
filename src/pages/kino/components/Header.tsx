import { TChildren } from '@t/index';
import { FC } from 'react';
import { Status } from './status';
import { TVariant } from './status/types';

type TProps = {
  left: TChildren;
  variant: TVariant;
};
export const Header: FC<TProps> = ({ left, variant }) => {
  return (
    <header className='row-space'>
      <>{left}</>
      <Status variant={variant} />
    </header>
  );
};
