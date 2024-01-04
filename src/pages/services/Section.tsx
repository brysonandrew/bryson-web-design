import { FC, PropsWithChildren } from 'react';

export type TProps = PropsWithChildren<{ title: string }>;
export const Section: FC<TProps> = ({
  title,
  children,
}) => (
  <div className='column gap-24 w-full'>
    <h4 className='w-full text-left +++text'>
      <span className='inline italics'>{title}</span>
    </h4>
    <>{children}</>
  </div>
);
