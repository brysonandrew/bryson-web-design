import { P2 } from '@components/space/P2';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { TSlugProps } from '@pages/projects/config';
import { FC } from 'react';

type TProps = TSlugProps;
export const Header: FC<TProps> = ({ slug }) => {
  const { title, description } = PROJECT_ITEMS_RECORD[slug];
  return (
    <header className='relative column-start h-full md:row'>
      <h4 className='+text text-color-stroke-1'>{title}</h4>
      <P2 classValue='hidden md:flex' />
      <h5 className='+text text-color-1 text-color-stroke-1 italic'>
        {description}
      </h5>
    </header>
  );
};
