import { Item } from './Item';
import { useCv } from '@brysonandrew/cv/CvProvider';

export const Experience = () => {
  const { sections } = useCv();
  return (
    <ul className='column-stretch w-full'>
      {sections.map((item, index) => (
        <Item key={item.title} {...item} index={index} />
      ))}
    </ul>
  );
};
