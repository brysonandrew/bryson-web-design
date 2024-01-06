import { FC, PropsWithChildren } from 'react';

export type TProps = PropsWithChildren<{ title: string }>;
export const Section: FC<TProps> = ({
  title,
  children,
}) => (
  <div className='column gap-6 w-full'>
    <h4 className='w-full text-left +text uppercase tracking-wider'>
      {title}
    </h4>
    <div className='column items-stretch gap-12 w-full'>
      {children}
    </div>
  </div>
);
