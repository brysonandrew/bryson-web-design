import { CUSTOM_CURSOR_KEY } from '@brysonandrew/lib/cursor/switch/config';
import { GALLERY_ICON } from '@brysonandrew/lib/icons/constants/gallery';
import { kebabToTitle } from '@brysonandrew/lib/utils/format';

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
