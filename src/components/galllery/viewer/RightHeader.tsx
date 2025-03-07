import { TTitle, TSlug, TRest } from 'lib/copy/types';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';
import { resolveCompositeKey } from '@brysonandrew/utils-key';
import { Badge } from '@components/galllery/badge';
import { FC } from 'react';

type TProps = TSlugProps<TSlug>;
export const RightHeader: FC<TProps> = ({ slug }) => {
  const { ITEMS_RECORD } = useGallery<TTitle, TRest>();
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
