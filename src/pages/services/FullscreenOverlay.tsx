import { useApp } from '@brysonandrew/app';
import { useOutsideClick } from '@brysonandrew/hooks';
import { I } from '@brysonandrew/icons-i';
import { CLOSE_ICON } from '@brysonandrew/icons-keys';
import {
  CUSTOM_CURSOR_KEY,
  useHover,
} from '@brysonandrew/motion-cursor';
import { TService } from '@pages/services/config/types';
import { SERVICES_ICONS } from '@pages/services/icons';
import { motion } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';

type TProps = {
  selected: TService;
  close(): void;
};
export const ServicesFullscreenOverlay: FC<TProps> = ({
  selected,
  close,
}) => {
  const { LIGHT, GLOW_BOX, BORDER_RADIUS, COLOR } =
    useApp();

  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick({
    ref,
    handler: close,
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        block: 'center',
        inline: 'center',
      });
    }
  }, []);

  const title = 'close';
  const { handlers } = useHover(
    CUSTOM_CURSOR_KEY,
    title,
    CLOSE_ICON,
    title,
  );

  return (
    <motion.div
      className="services-modal-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div ref={ref} className="relative bg-red">
        {LIGHT && (
          <>
            <LIGHT.MOTION.Back />
            <LIGHT.MOTION.Marker classValue="z-50" />
          </>
        )}
        <motion.div
          layoutId={selected.id}
          className="services-modal"
          style={{
            boxShadow: GLOW_BOX.accent,
            borderRadius: BORDER_RADIUS.LG,
          }}
        >
          <motion.button
            className="services-modal-close"
            onClick={close}
            aria-label="Close"
            {...handlers}
          >
            <I icon={CLOSE_ICON} />
          </motion.button>

          <h3
            className="flex items-center gap-2"
            style={{ color: COLOR.accent }}
          >
            <div>{SERVICES_ICONS[selected.id]}</div>
            <div>{selected.title}</div>
          </h3>
          <p className="services-modal-full">
            {selected.full}
          </p>

          <ul className="services-modal-list">
            {selected.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};
