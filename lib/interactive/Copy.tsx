import { TTitleProps } from '@brysonandrew/config-types';
import { COPY_ICON } from '@brysonandrew/icons-keys';
import { BSm } from '@brysonandrew/interactive/base/BSm';
import { TClipboardState } from '@brysonandrew/notifications';
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
  return (
    <BSm
      shape='interactive-circ-lg'
      title={`Copy ${title} to clipboard`}
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
