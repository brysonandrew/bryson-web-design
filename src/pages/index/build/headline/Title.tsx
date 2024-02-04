import type { FC } from 'react';
import { TChildrenString } from '@brysonandrew/config-types/dom';
import { Animation } from '@brysonandrew/layout/typography/animation';

type TProps = TChildrenString;
export const Title: FC<TProps> = ({ children }) => {
  return (
    <h2
      style={{ lineHeight: 1 }}
      className='relative row-wrap justify-center gap-4 title-page uppercase char-gap-4 text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl xl:text-8xl'
    >
      <Animation>{children}</Animation>
    </h2>
  );
};
