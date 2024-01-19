import { TTitle, TSlug, TRest } from '@app/gallery/types';
import { TSlugProps } from '@brysonandrew/lib/gallery/config/types';
import { useGallery } from '@brysonandrew/lib/gallery/context/Provider';
import { Badge } from '@pages/pricing/badge';
import { FC } from 'react';

type TProps = TSlugProps<TSlug>;
export const RightHeader: FC<TProps> = ({ slug }) => {
  const { ITEMS_RECORD } = useGallery<
    TTitle,
    TSlug,
    TRest
  >();
  return (
    <Badge type={ITEMS_RECORD[slug].pricing} isHover />
  );
};
