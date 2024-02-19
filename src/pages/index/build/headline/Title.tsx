import type { FC } from 'react';
import { TChildrenString } from '@brysonandrew/config-types/dom';
import { Animation } from '@brysonandrew/layout-typography/animation';

type TProps = TChildrenString;
export const Title: FC<TProps> = ({ children }) => {
  return (
    <h2 className='relative overflow-hidden row-wrap justify-center gap-4 leading-none text-shadow-inherit uppercase char-gap-4 text-4xl px-8 sm:(text-5xl px-24) md:(text-5.5xl px-4) lg:(text-6xl px-20) xl:(text-8xl px-4)'>
      <Animation>{children}</Animation>
    </h2>
  );
};
