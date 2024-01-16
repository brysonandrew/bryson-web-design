import type { FC } from 'react';
import { P1 } from '@lib/components/layout/space/P1';
import { P2 } from '@lib/components/layout/space/P2';
import { Badge } from '../../../pricing/badge';
import { Time } from '../../components/content/Time';
import { TItem } from '@lib/gallery/config/types';
import { PROJECT_ITEMS_RECORD } from '@app/gallery/items';

type TProps = Pick<TItem, 'slug'> & {
  isHover?: boolean;
};
export const RightCollapsed: FC<TProps> = ({
  slug,
  isHover,
}) => {
  const { time, pricing } = PROJECT_ITEMS_RECORD[slug];

  return <Time time={time} />;
};
