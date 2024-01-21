import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { useGallery } from '../../context/GalleryProvider';

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
      <h4 className='title-section title-main'>{title}</h4>
      <div className='p-1 md:p-2' />
      <h5 className='title-section italic'>
        {description}
      </h5>
    </div>
  );
};
