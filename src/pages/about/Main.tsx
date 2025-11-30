import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { useApp } from '@brysonandrew/app';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  const { COLOR } = useApp();

  return (
    <motion.div
      className="title-section w-core flex flex-col items-center gap-16"
      style={style}
    >
      <h3
        className="title-main text-center lg:w-1/2 text-3xl"
        style={{ color: COLOR.accent }}
      >
        Hi, I’m Andrew — a New Zealand Front-End Developer
        focused on clean, modern, reliable interfaces.
      </h3>
      <div className="flex flex-col items-center gap-6">
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
    </motion.div>
  );
};
