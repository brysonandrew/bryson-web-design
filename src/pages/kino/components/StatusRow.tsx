import { TChildren } from '@t/index';
import { FC } from 'react';
import { Status } from './status';
import { TVariant } from './status/types';

type TProps = {
  left: TChildren;
  variant: TVariant;
};
export const StatusRow: FC<TProps> = ({ left, variant }) => {
  return (
    <div className='row-space'>
      <>{left}</>
      <Status variant={variant} />
    </div>
  );
};
