import { TAnchorProps } from '@brysonandrew/config-types';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityTitles';

export const resolveAccessibilityHrefTitles = ({
  title,
  href,
}: TAnchorProps) =>
  resolveAccessibilityTitles(`Open ${title}\n- ${href}`);
