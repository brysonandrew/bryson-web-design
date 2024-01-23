import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { GALLERY_ICON } from '@brysonandrew/icons/config/constants/gallery';
import { kebabToTitle } from '@brysonandrew/utils/format';

export const resolveHoverKeyArgs = (slug: string) => {
  return [
    CUSTOM_CURSOR_KEY,
    slug,
    GALLERY_ICON,
    <span>
      View{' '}
      <span className='title-main'>
        {kebabToTitle(slug)}
      </span>{' '}
      in gallery
    </span>,
  ] as const;
};
