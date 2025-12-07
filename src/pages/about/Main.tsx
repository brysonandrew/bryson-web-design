import { useState, type FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { AboutLong } from '@pages/about/Long';
import { Button } from '@brysonandrew/interactive';
import { I } from '@brysonandrew/icons-i';
import {
  ARROW_DOWN,
  ARROW_UP,
} from '@brysonandrew/icons-keys';
import { AboutTitle } from '@pages/about/Title';
import { AboutBlocks } from '@pages/about/Blocks';
import { Player } from '@components/Player';
import { ABOUT_COPY } from '@pages/about/constants';

type TProps = Partial<TPartialParallaxMotionProps> & {
  isCollapsible?: boolean;
};
export const Main: FC<TProps> = ({
  style,
  isCollapsible,
}) => {
  const [isLong, setLong] = useState(!isCollapsible);
  const buttonTitle = isLong ? 'Show less' : 'Read more';

  return (
    <motion.div
      className="title-section w-core flex flex-col items-stretch gap-16"
      style={style}
    >
      <div className="flex flex-col-reverse items-center justify-between gap-16 lg:(flex-row items-start)">
        <div className="flex flex-col gap-16 grow">
          <AboutTitle>
            <div className="flex gap-4">
              {ABOUT_COPY.intro.title}
            </div>
          </AboutTitle>
          <AboutBlocks>
            {ABOUT_COPY.intro.paragraphs}
          </AboutBlocks>
        </div>
        <Player />
      </div>

      <AnimatePresence>
        {isLong && <AboutLong />}
      </AnimatePresence>
      {isCollapsible && (
        <Button
          title={buttonTitle}
          onClick={() => setLong(!isLong)}
          classValue="w-auto p-0"
        >
          <div className="flex items-center text-main whitespace-nowrap uppercase text-base gap-2 hover:text-accent">
            {buttonTitle}{' '}
            <I
              className="text-sm"
              icon={isLong ? ARROW_UP : ARROW_DOWN}
            />
          </div>
        </Button>
      )}
    </motion.div>
  );
};
