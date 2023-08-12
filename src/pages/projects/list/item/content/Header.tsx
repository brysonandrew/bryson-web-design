import { Space2 } from '@components/spaces/Space2';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { TSlugProps } from '@pages/projects/config';
import { FC } from 'react';

type TProps = TSlugProps;
export const Header: FC<TProps> = ({ slug }) => {
  const { title, description } = PROJECT_ITEMS_RECORD[slug];
  return (
    <header className='relative column-start h-full md:row'>
      <h4 className='+text text-color-stroke-2'>{title}</h4>
      <Space2 classValue='hidden md:flex' />
      <h5 className='+text text-color-1 italic'>
        {description}
      </h5>
    </header>
  );
};
