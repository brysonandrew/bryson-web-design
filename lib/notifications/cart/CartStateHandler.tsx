import { FC, useEffect, useState } from 'react';
import { TICK_ICON } from '@brysonandrew/icons-keys/inputs';
import { motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@brysonandrew/animation';
import { TNotificationsConfig } from '@brysonandrew/notifications/config/types';
import { I } from '@brysonandrew/icons-i';
import { useDelayCallbackHandler } from '@brysonandrew/hooks-window';
import { CART_ICON } from '@brysonandrew/icons-keys';
import { Loading } from '@brysonandrew/loading';

type TProps = TNotificationsConfig;
export const CartStateHandler: FC<TProps> = ({
  notifications,
  onNotificationsRemove,
}) => {
  const [isAdding, setAdding] = useState<boolean>(true);

  const endAdding = () => {
    setAdding(false);
  };
  const terminateNotifications = () => {
    onNotificationsRemove(notifications);
  };
  const delayAddedFalse = useDelayCallbackHandler(
    endAdding,
    200,
  );
  const delayAddedNull = useDelayCallbackHandler(
    terminateNotifications,
    1000,
  );

  useEffect(() => {
    delayAddedFalse();
    delayAddedNull();
  }, []);

  return (
    <motion.div
      {...PRESENCE_OPACITY}
      onTap={terminateNotifications}
      className='fill-screen center bg-gray-05 text-4xl z-50 pointer-events-none'
    >
      {isAdding ? (
        <div className='fill center'>
          <Loading sizeClassValue='w-24 h-24' />
        </div>
      ) : (
        <div className='column gap-8'>
          <header className='row gap-4'>
            <I icon={isAdding ? CART_ICON : TICK_ICON} />
            <h4 className='tracking-widest uppercase'>
              {isAdding ? 'adding ' : 'added '}
              to cart
            </h4>
          </header>
        </div>
      )}
    </motion.div>
  );
};

export { CART_ICON };
