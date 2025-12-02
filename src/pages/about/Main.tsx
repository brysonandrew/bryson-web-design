import { useState, type FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { useApp } from '@brysonandrew/app';
import { AboutLong } from '@pages/about/Long';
import { Button } from '@brysonandrew/interactive';
import { I } from '@brysonandrew/icons-i';
import {
  ARROW_DOWN,
  ARROW_UP,
} from '@brysonandrew/icons-keys';
import { AboutTitle } from '@pages/about/Title';
import { AboutBlocks } from '@pages/about/Blocks';

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
      <AboutTitle>
        Hi, I’m Andrew — a New Zealand Front-End Developer
        focused on clean, modern, reliable interfaces.
      </AboutTitle>
      <AboutBlocks>
        {[
          `I’ve spent the last 9+ years building fast, accessible, and user-friendly web applications using React, Vue, TypeScript, and Next.js/Nuxt.`,
          `I specialise in turning ideas and complex requirements into clean, production-ready interfaces — built with clarity, communication, and attention to detail.`,
        ]}
      </AboutBlocks>
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
