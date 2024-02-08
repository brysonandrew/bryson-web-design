import { TTitleProps } from '@brysonandrew/config-types';
import { COPY_ICON } from '@brysonandrew/icons-keys';
import { BSm } from '@brysonandrew/interactive/base/BSm';
import { TClipboardState } from '@brysonandrew/notifications';
import { resolveErrorMessage } from '@brysonandrew/utils-error';
import { FC } from 'react';

type TCopyProps = Pick<TClipboardState, 'handler'> &
  TTitleProps & {
    value: string;
  };
export const Copy: FC<TCopyProps> = ({
  title,
  value,
  handler,
}) => {
  return (
    <BSm
      shape='interactive-sq-sm'
      title={`Copy ${title} text to clipboard`}
      icon={COPY_ICON}
      onClick={async () => {
        try {
          handler({ title, value });
        } catch (error) {
          resolveErrorMessage(error);
        }
      }}
    />
  );
};
