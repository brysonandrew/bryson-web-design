import { TSlugProps } from '@brysonandrew/lib/gallery/config/types';
import { useGallery } from '../../context/Provider';

type TProps<K extends string> = TSlugProps<K>;
export const Header = <
  T extends string,
  K extends string,
  R extends object,
>({
  slug,
}: TProps<K>) => {
  const { ITEMS_RECORD } = useGallery<T, K, R>();
  const { title, description } = ITEMS_RECORD[slug];
  return (
    <div className='relative column-start h-full md:row'>
      <h4 className='section-title main-title'>{title}</h4>
      <div className='p-1 md:p-2' />
      <h5 className='section-title italic'>
        {description}
      </h5>
    </div>
  );
};
