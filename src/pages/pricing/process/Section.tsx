import { FC, PropsWithChildren } from 'react';

export type TSectionProps = PropsWithChildren<{ title: string }>;
export const Section: FC<TSectionProps> = ({
  title,
  children,
}) => (
  <div className='column gap-6 w-full'>
    <h4 className='w-full text-left title-section uppercase tracking-wider'>
      {title}
    </h4>
    <div className='column-stretch gap-12 w-full'>
      {children}
    </div>
  </div>
);
