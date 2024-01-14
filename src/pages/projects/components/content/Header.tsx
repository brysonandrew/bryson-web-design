import { PROJECT_ITEMS_RECORD } from '@pages/projects/config/constants/items';
import { TSlugProps } from '@pages/projects/config/types';
import { FC } from 'react';

type TProps = TSlugProps;
export const Header: FC<TProps> = ({ slug }) => {
  const { title, description } = PROJECT_ITEMS_RECORD[slug];
  return (
    <div className='relative column-start h-full md:row'>
      <h4 className='section-title text-g-tb'>{title}</h4>
      <div className='p-1 md:p-2' />
      <h5 className='section-title text-t-bb italic'>
        {description}
      </h5>
    </div>
  );
};
