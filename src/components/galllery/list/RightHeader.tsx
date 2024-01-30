import { FC } from 'react';
import { Time } from '@brysonandrew/gallery/components/content/Time';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { Badge } from '@pages/pricing/badge';
import { TTitle, TSlug, TRest } from '@app/gallery/types';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';
import { resolveCompositeKey } from '@brysonandrew/utils';

type TProps = TSlugProps<TSlug> & {
  isHover?: boolean;
};
export const RightHeader: FC<TProps> = ({
  slug,
  isHover,
}) => {
  const { ITEMS_RECORD } = useGallery<
    TTitle,
    TSlug,
    TRest
  >();
  const { time, pricing } = ITEMS_RECORD[slug];
  const id = resolveCompositeKey('badge', slug);

  return (
    <>
      <Time
        key={resolveCompositeKey('time', slug)}
        time={time}
      />
      <Badge
        key={resolveCompositeKey('list', id)}
        layoutId={id}
        type={pricing}
        isHover={isHover}
      >
        {pricing}
      </Badge>
    </>
  );
};
