import { FadeDown } from '@components/vertical-fade/FadeDown';
import { FC } from 'react';

export const Decoration: FC = () => (
  <FadeDown
    {...{
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1 },
      },
      exit: { opacity: 0 },
    }}
  />
);
