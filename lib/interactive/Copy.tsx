import { TTitleProps } from '@brysonandrew/config-types';
import {
  CUSTOM_CURSOR_KEY,
  useHoverKey,
} from '@brysonandrew/motion/cursor';
import { COPY_ICON } from '@brysonandrew/icons-keys';
import { BSm } from '@brysonandrew/interactive/base/BSm';
import { TClipboardState } from '@brysonandrew/notifications';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes';
import { resolveErrorMessage } from '@brysonandrew/utils-error';
import { FC } from 'react';

export type TCopyProps = Pick<TClipboardState, 'handler'> &
  TTitleProps & {
    value: string;
  };
export const Copy: FC<TCopyProps> = ({
  title,
  value,
  handler,
}) => {
  const longTitle = `Copy ${title} to clipboard`;
  const { handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    longTitle,
    COPY_ICON,
  );
  return (
    <BSm
      shape='interactive-circ-md'
      icon={COPY_ICON}
      onClick={async () => {
        try {
          handler({ title, value });
        } catch (error) {
          resolveErrorMessage(error);
        }
      }}
      {...resolveInteractiveLabels(longTitle)}
      {...handlers}
    />
  );
};
