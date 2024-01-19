import type { FC } from 'react';
import { Time } from '@brysonandrew/gallery/components/content/Time';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { Badge } from '@pages/pricing/badge';
import { TTitle, TSlug, TRest } from '@app/gallery/types';
import { useGallery } from '@brysonandrew/gallery/context/Provider';

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

  return (
    <>
      <Time time={time} />
      <Badge type={pricing} isHover={isHover}>
        {pricing}
      </Badge>
    </>
  );
};
