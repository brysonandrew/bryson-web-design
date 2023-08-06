import { type FC } from 'react';
import { Metal } from '@components/metal';
import type { TChildren } from '@t/index';
import { TextXl } from '@components/text/TextXl';
import { Glow } from '@components/filter-animate/Glow';
import clsx from 'clsx';
import { INTERACTIVE_CLASS } from './constants';

type TProps = {
  children: TChildren;
};
export const Inner: FC<TProps> = ({ children }) => {
  return (
    <Glow drop={0.5} text={2} color='teal'>
      <Metal />
      <TextXl classValue={clsx(INTERACTIVE_CLASS)}>
        {children}
      </TextXl>
    </Glow>
  );
};
