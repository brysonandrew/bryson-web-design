import { AnimatePresence } from 'framer-motion';
import { TNotificationsConfig } from '@brysonandrew/notifications/config/types';
import { FC } from 'react';

export type TNotificationsProps = TNotificationsConfig & {
  Handlers: FC<TNotificationsConfig>[];
};
export const Cart = ({
  Handlers,
  ...config
}: TNotificationsProps) => {
  if (Handlers.length > 0) {
    for (const Handler of Handlers) {
      return (
        <AnimatePresence>
          {config.notifications.length > 0 && (
            <Handler key={Handler.name} {...config} />
          )}
        </AnimatePresence>
      );
    }
  }
  return null;
};

export * from './cart/CartStateHandler';
export * from './clipboard/ClipboardStateHandler';
export * from './clipboard/useClipboardState';
export * from './config/types';
