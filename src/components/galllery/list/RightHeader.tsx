import type { FC } from 'react';
import { Time } from '../../../../lib/gallery/components/content/Time';
import { TSlugProps } from '@lib/gallery/config/types';
import { useGallery } from '@lib/gallery/context/useGallery';
import { Badge } from '@pages/pricing/badge';

type TProps = TSlugProps & {
  isHover?: boolean;
};
export const RightHeader: FC<TProps> = ({
  slug,
  isHover,
}) => {
  const { ITEMS_RECORD } = useGallery();
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
