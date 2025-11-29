import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { useApp } from '@brysonandrew/app';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  const { COLOR } = useApp();

  return (
    <motion.div
      className="title-section w-core flex flex-col gap-4"
      style={style}
    >
      <h3
        className="title-main"
        style={{ color: COLOR.accent }}
      >
        Hi, I’m Andrew — a Front-End Developer focused on
        clean, modern, reliable interfaces.
      </h3>
      <p className="title-section">
        With 9+ years of
        experience building fast, responsive, and
        user-friendly web applications using React, Vue,
        TypeScript, Next.js, Nuxt, and Headless WordPress.
      </p>
      <p className="title-section">
        I specialise in turning ideas, designs, and complex
        requirements into clean, production-ready interfaces
        — built with clarity, communication, and attention
        to detail.
      </p>
    </motion.div>
  );
};
