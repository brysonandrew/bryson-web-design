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

type TProps = Partial<TPartialParallaxMotionProps> & {
  isCollapsible?: boolean;
};
export const Main: FC<TProps> = ({
  style,
  isCollapsible,
}) => {
  const { COLOR, LIGHT } = useApp();
  const [isLong, setLong] = useState(!isCollapsible);
  const buttonTitle = isLong ? 'Show less' : 'Read more';

  return (
    <motion.div
      className="title-section w-core flex flex-col items-center gap-16"
      style={style}
    >
      <div className="relative pl-6">
        {LIGHT && (
          <>
            <LIGHT.MOTION.Marker classValue="z-50" />
          </>
        )}
        <h3
          className="relative text-main"
          style={{ color: COLOR.accent }}
        >
          Hi, I’m Andrew — a New Zealand Front-End Developer
          focused on clean, modern, reliable interfaces.
        </h3>
      </div>

      <div className="flex flex-col items-center gap-6 pl-6">
        <p className="title-section">
          With 9+ years of experience building fast,
          responsive, and user-friendly web applications
          using React, Vue, TypeScript, Next.js, Nuxt, and
          Headless WordPress.
        </p>
        <p className="title-section">
          I specialise in turning ideas, designs, and
          complex requirements into clean, production-ready
          interfaces — built with clarity, communication,
          and attention to detail.
        </p>
      </div>
      <AnimatePresence>
        {isLong && <AboutLong />}
      </AnimatePresence>
      {isCollapsible && (
        <Button
          title={buttonTitle}
          onClick={() => setLong(!isLong)}
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
