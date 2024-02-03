import { useApp } from '@brysonandrew/app';
import { TClassValueProps } from '@brysonandrew/config/types/dom/main';
import { FC, PropsWithChildren } from 'react';

export const Banner: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children }) => {
  const { BORDER_RADIUS } = useApp();
  return (
    <div
      className='row gap-2 absolute left-1/2 bottom-full -translate-x-1/2 translate-y-2/5 bg-red px-2 py-1 text-main-inverted text-xl whitespace-nowrap uppercase'
      style={{ borderRadius: BORDER_RADIUS.SM }}
    >
      {children}
    </div>
  );
};
