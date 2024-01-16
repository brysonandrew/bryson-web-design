import { TSlugProps } from '@lib/gallery/config/types';
import { useGallery } from '@lib/gallery/context/useGallery';
import { Badge } from '@pages/pricing/badge';
import { FC } from 'react';

type TProps = TSlugProps;
export const RightHeader: FC<TProps> = ({ slug }) => {
  const { ITEMS_RECORD } = useGallery();
  return (
    <Badge type={ITEMS_RECORD[slug].pricing} isHover />
  );
};
