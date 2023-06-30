import { Filters } from '../components/Filters';
import type { TChildren } from '@t/index';
import type { FC } from 'react';
import { FadeIn } from '@components/FadeIn';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { useScrollToTop } from '@hooks/scroll/useScrollToTop';
import { Variables } from '@css/Variables';
import { Background } from '@components/background';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from '@state/Context';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useFading } from './useFading';

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useScrollControl();
  useScrollToTop();
  const isFading = useFading();
  const { isInit } = useContext();

  return (
    <>
      <Variables />
      <Filters />
      <AnimatePresence>
        {children}
        {isInit && !isFading ? (
          <FadeIn key='FADE_IN' />
        ) : (
          <motion.div
            key='BACKGROUND'
            {...PRESENCE_OPACITY}
          >
            <Background />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
