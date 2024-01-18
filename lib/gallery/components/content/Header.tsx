import { TSlugProps } from 'lib/gallery/config/types';
import { useGallery } from 'lib/gallery/context/useGallery';
import { FC } from 'react';

type TProps = TSlugProps;
export const Header: FC<TProps> = ({ slug }) => {
  const { ITEMS_RECORD } = useGallery();
  const { title, description } = ITEMS_RECORD[slug];
  return (
    <div className='relative column-start h-full md:row'>
      <h4 className='section-title main-title'>
        {title}
      </h4>
      <div className='p-1 md:p-2' />
      <h5 className='section-title italic'>
        {description}
      </h5>
    </div>
  );
};
