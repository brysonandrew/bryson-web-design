import type { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { I } from '@brysonandrew/icons-i';
import { CLIPBOARD_SUCCESS_ICON } from '@brysonandrew/icons-keys';
import { PRESENCE_OPACITY } from '@brysonandrew/motion-config-constants';
import { TClipboardState } from '@brysonandrew/notifications/clipboard/useClipboardState';
import { Loading } from '@brysonandrew/loading';

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
          className="fill-screen center dark:bg-black-08 bg-white-08 text-4xl z-50 overflow-hidden pointer-events-none"
          {...PRESENCE_OPACITY}
        >
          {copying === 'pending' ? (
            <div className="row gap-6">
              <Loading sizeClassValue="w-16 h-16" />
              <div className="char-gap-4 uppercase">
                copying
              </div>
            </div>
          ) : (
            <div className="column gap-8 text-xl py-4 px-8 dark:bg-black-09 bg-white-09 rounded-md backdrop-blur-md md:text-2xl lg:text-4xl">
              <header className="row gap-6">
                <div className="char-gap-2 uppercase">
                  {copying.title} copied
                </div>
                <I
                  classValue="w-7 h-7"
                  icon={CLIPBOARD_SUCCESS_ICON}
                />
              </header>
              <h4>&quot;{copying.value}&quot;</h4>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CLIPBOARD_SUCCESS_ICON };
