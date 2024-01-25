import { Item } from './Item';
import { TInitItem } from '@app/gallery/types';
import { useCv } from '@pages/_workshop/cv/CvProvider';

export const Experience = () => {
  const { sections } = useCv();
  return (
    <ul className='column-stretch w-full'>
      {sections.map((item: TInitItem, index) => (
        <Item key={item.title} {...item} index={index} />
      ))}
    </ul>
  );
};
