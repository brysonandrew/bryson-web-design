import { TChildrenProps } from '@t/index';
import { ButtonHTMLAttributes, FC } from 'react';

export const Button: FC<
  TChildrenProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button
      className='uppercase text-2xl px-3 py-1 bg-black-1 text-teal-bright disabled:(text-gray cursor-not-allowed)'
      {...props}
    >
      {children}
    </button>
  );
};
