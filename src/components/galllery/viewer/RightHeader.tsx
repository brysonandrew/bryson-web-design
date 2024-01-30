import { TTitle, TSlug, TRest } from '@app/gallery/types';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';
import { resolveCompositeKey } from '@brysonandrew/utils';
import { Badge } from '@pages/pricing/badge';
import { FC, Fragment } from 'react';

type TProps = TSlugProps<TSlug>;
export const RightHeader: FC<TProps> = ({ slug }) => {
  const { ITEMS_RECORD } = useGallery<
    TTitle,
    TSlug,
    TRest
  >();
  const id = resolveCompositeKey('badge', slug);

  return (
    <Badge
      key={resolveCompositeKey('viewer', id)}
      layoutId={id}
      type={ITEMS_RECORD[slug].pricing}
      isHover
    />
  );
};
