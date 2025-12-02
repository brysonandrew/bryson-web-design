import { useApp } from '@brysonandrew/app';
import { OPEN_IN_NEW_ICON } from '@brysonandrew/icons-keys';
import {
  CUSTOM_CURSOR_KEY,
  useHover,
} from '@brysonandrew/motion-cursor';
import { TService } from '@pages/services/config/types';
import { SERVICES_ICONS } from '@pages/services/icons';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TProps = {
  service: TService;
  onServiceSelect(service: TService): void;
};
export const ServicesCard: FC<TProps> = ({
  service,
  onServiceSelect,
}) => {
  const { GLOW_BOX, BORDER_RADIUS, COLOR, LIGHT } =
    useApp();

  // const title = 'open';
  // const { handlers } = useHover(
  //   CUSTOM_CURSOR_KEY,
  //   title,
  //   OPEN_IN_NEW_ICON,
  //   title,
  // );
  return (
    <motion.button
      key={service.id}
      layoutId={service.id}
      className="service-card relative"
      onClick={() => onServiceSelect(service)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      style={{
        borderRadius: BORDER_RADIUS.MD,
        boxShadow: GLOW_BOX.accent,
      }}
      // {...handlers}
    >
      {LIGHT && (
        <>
          <LIGHT.MOTION.Back />
          <LIGHT.MOTION.Marker classValue="z-50" />
        </>
      )}
      <h3
        className="relative flex gap-2 items-stretch md:gap-4"
        style={{ color: COLOR.accent }}
      >
        <div className="shrink-0 flex items-center justify-center">
          {SERVICES_ICONS[service.id]}
        </div>
        <motion.div layout>{service.title}</motion.div>
      </h3>
      <div className="h-4" />
      <p className="relative">{service.short}</p>
    </motion.button>
  );
};
