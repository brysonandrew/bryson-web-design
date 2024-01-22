import { I } from '@brysonandrew/icons/icon';
import { IMAGE_ICON } from '@brysonandrew/icons/constants';
import { FC, PropsWithChildren } from 'react';
import { TextLines } from '../../../skeleton/TextLines';
import { Shell } from './Shell';

export const Headline: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <Shell>
      {children}
      <I
        icon={IMAGE_ICON}
        className='absolute left-1/2 object-contain -translate-x-1/2 h-11/12 w-11/12 text-gray'
      />
      <div className='relative w-2/3'>
        <TextLines classValue='bg-main-inverted' />
      </div>
    </Shell>
  );
};
