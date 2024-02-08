import { TAnchorProps } from '@brysonandrew/config-types';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes/resolveInteractiveLabels';

export const resolveInteractiveHrefLabels = ({
  title,
  href,
}: TAnchorProps) =>
  resolveInteractiveLabels(`Open ${title}\n- ${href}`);
