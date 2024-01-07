import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { TSlugProps } from '@pages/projects/config';
import { FC } from 'react';

type TProps = TSlugProps;
export const Header: FC<TProps> = ({ slug }) => {
  const { title, description } = PROJECT_ITEMS_RECORD[slug];
  return (
    <header className='relative column-start h-full md:row'>
      <h4 className='+text text-g-tb'>{title}</h4>
      <div className='p-1 md:p-2' />
      <h5 className='+text text-t-bb italic'>
        {description}
      </h5>
    </header>
  );
};
