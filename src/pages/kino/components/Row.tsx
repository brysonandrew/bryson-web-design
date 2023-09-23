import { TChildren } from '@t/index';
import { FC } from 'react';
import { Subtitle } from './Subtitle';
import { P2 } from '@components/space/P2';

type TProps = { title: TChildren; content: TChildren };
export const Row: FC<TProps> = ({ title, content }) => {
  return (
    <div className='columns md:row-space'>
      <Subtitle>{title}</Subtitle>
      <P2 classValue='flex md:hidden' />
      {content}
    </div>
  );
};
