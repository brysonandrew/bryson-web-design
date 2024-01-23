import { FC, PropsWithChildren } from 'react';
import { Focus } from '../../../focus';
import { CONTACT_FORM } from '../../config';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='relative h-36 column-start-center gap-2 px-8 w-full bg-main'>
      <Focus>{CONTACT_FORM}</Focus>
      {children}
    </div>
  );
};
