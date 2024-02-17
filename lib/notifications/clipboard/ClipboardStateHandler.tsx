import type { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { I } from '@brysonandrew/icons-i';
import { CLIPBOARD_SUCCESS_ICON } from '@brysonandrew/icons-keys';
import { PRESENCE_OPACITY } from '@brysonandrew/animation';
import { TClipboardState } from '@brysonandrew/notifications/clipboard/useClipboardState';
import { Loading } from '@brysonandrew/loading/Loading';

type TProps = TClipboardState;
export const ClipboardStateHandler: FC<TProps> = ({
  copying,
  onEnd,
}) => {
  return (
    <AnimatePresence>
      {copying && (
        <motion.div
          onClick={onEnd}
          className='fill-screen center dark:bg-black-08 bg-white-08 text-4xl z-50 pointer-events-none'
          {...PRESENCE_OPACITY}
        >
          {copying === 'pending' ? (
            <div className='row gap-6'>
              <Loading sizeClassValue='w-16 h-16' />
              <div className='tracking-widest uppercase'>
                copying
              </div>
            </div>
          ) : (
            <div className='column gap-8 text-xl md:text-2xl lg:text-4xl'>
              <header className='row gap-6'>
                <div className='char-gap-2 uppercase'>
                  {copying.title} copied
                </div>
                <I
                  classValue='w-7 h-7'
                  icon={CLIPBOARD_SUCCESS_ICON}
                />
              </header>
              <h4>"{copying.value}"</h4>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CLIPBOARD_SUCCESS_ICON };
