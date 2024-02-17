import { useApp } from '@brysonandrew/app';
import { FC, PropsWithChildren } from 'react';

export type TSectionProps = PropsWithChildren<{
  title: string;
}>;
export const Section: FC<TSectionProps> = ({
  title,
  children,
}) => {
  const { COLOR } = useApp();
  return (
    <div className='column gap-6 w-full'>
      <h4
        style={{ color: COLOR.accent }}
        className='w-full text-left title-section uppercase char-gap-1'
      >
        {title}
      </h4>
      <div className='column-stretch gap-12 w-full'>
        {children}
      </div>
    </div>
  );
};
