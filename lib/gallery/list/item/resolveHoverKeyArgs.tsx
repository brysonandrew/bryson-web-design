import { CUSTOM_CURSOR_KEY } from '@lib/cursor/switch/config';
import { GALLERY_ICON } from '@lib/constants/icons/constants/gallery';
import { kebabToTitle } from '@lib/utils/format';

export const resolveHoverKeyArgs = (slug: string) => {
  return [
    CUSTOM_CURSOR_KEY,
    slug,
    GALLERY_ICON,
    <span>
      View{' '}
      <span className='main-title'>
        {kebabToTitle(slug)}
      </span>{' '}
      in gallery
    </span>,
  ] as const;
};
