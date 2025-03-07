import { useApp } from '@brysonandrew/app';
import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';

export const Hud = () => {
  const { LIGHT, GLOW_BOX, GLOW_DROP } = useApp();
  const G = LIGHT?.MOTION.GlowFill ?? motion.div;
  return (
    <G
      drag
      style={{
        boxShadow: GLOW_BOX.accent,
        filter: GLOW_DROP.accent,
      }}
      dragConstraints={{
        left: 40,
        top: 40,
        bottom: 600,
        right: 800,
      }}
      className={cx(
        'row fixed left-0 top-0 right-0 z-50 h-40 w-140',
      )}
    >
      <div className="bg-main h-60 w-60" />
      <div className="bg-main-inverted h-60 w-60" />
      <div className="column bg-main-inverted">
        <div className="h-20 w-20" />
        <div className="h-20 w-20" />
        <div className="h-20 w-20" />
      </div>
    </G>
  );
};
