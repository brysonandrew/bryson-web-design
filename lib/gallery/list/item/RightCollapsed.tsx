import type { FC } from 'react';
import { Time } from '../../components/content/Time';
import { TItem } from '@lib/gallery/config/types';
import { useGallery } from '@lib/gallery/context/useGallery';

type TProps = Pick<TItem, 'slug'> & {
  isHover?: boolean;
};
export const RightCollapsed: FC<TProps> = ({
  slug,
  isHover,
}) => {
  const { ITEMS_RECORD } = useGallery();
  const { time, pricing } = ITEMS_RECORD[slug];

  return <Time time={time} />;
};
