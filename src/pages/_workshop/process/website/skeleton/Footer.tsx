import { TextLines } from '../../skeleton/TextLines';
import { FC, PropsWithChildren } from 'react';

export const Footer: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <footer className='relative row gap-4 w-full h-16 px-8 bg-main'>
      {children}
      <div className='row-start-space w-full'>
        <div className='w-1/6'>
          <TextLines
            classValue='bg-main-inverted'
            count={1}
          />
        </div>
        <div className='w-1/6'>
          <TextLines
            classValue='bg-main-inverted'
            height='h-0.5'
            gap='gap-0.5'
            count={4}
          />
        </div>
      </div>
    </footer>
  );
};
