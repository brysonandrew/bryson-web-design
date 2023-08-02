import { FadeDown } from '@components/vertical-fade/FadeDown';
import { SCROLL_DECORATION_PRESENCE } from '@constants/animation';
import { FC } from 'react';

export const Decoration: FC = () => (
  <FadeDown {...SCROLL_DECORATION_PRESENCE} />
);
