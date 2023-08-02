import { FadeUp } from '@components/vertical-fade/FadeUp';
import { SCROLL_DECORATION_PRESENCE } from '@constants/animation';
import { FC } from 'react';

export const Decoration: FC = () => (
  <FadeUp {...SCROLL_DECORATION_PRESENCE} />
);
