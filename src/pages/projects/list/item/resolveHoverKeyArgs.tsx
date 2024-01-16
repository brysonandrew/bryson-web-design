import { CUSTOM_CURSOR_KEY } from '@lib/cursor/switch/config';
import { GALLERY_ICON } from '@lib/constants/icons/constants/gallery';
import { kebabToTitle } from '@lib/utils/format';

export const resolveHoverKeyArgs = (slug: string) => {
  const title = `View ${kebabToTitle(slug)} in gallery`;

  return [
    CUSTOM_CURSOR_KEY,
    slug,
    GALLERY_ICON,
    <span>{title}</span>,
  ] as const;
};
