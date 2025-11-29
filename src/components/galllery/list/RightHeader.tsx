import { FC } from 'react';
import { Time } from '@components/galllery/list/Time';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { Badge } from '@components/galllery/badge';
import { TTitle, TSlug, TRest } from 'lib/copy/types';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';
import { resolveCompositeKey } from '@brysonandrew/utils-key';

type TProps = TSlugProps<TSlug> & {
  isHover?: boolean;
};
export const RightHeader: FC<TProps> = ({
  slug,
  isHover,
}) => {
  const { ITEMS_RECORD } = useGallery<
    TTitle,
    TRest
  >();
  const { time, pricing } = ITEMS_RECORD[slug];
  // const id = resolveCompositeKey('badge', slug);

  return (
    <>
      <Time time={time} />
      {/* <Badge
        key={resolveCompositeKey('list', id)}
        layoutId={id}
        type={pricing}
        isHover={isHover}
      >
        {pricing}
      </Badge> */}
    </>
  );
};
