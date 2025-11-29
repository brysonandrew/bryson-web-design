import { useState, type FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { SERVICES } from '@pages/services/config/constants';
import { ServicesStylesRoot } from '@pages/services/styles';
import { TService } from '@pages/services/config/types';
import { SERVICES_ICONS } from '@pages/services/icons';
import { ServicesFullscreenOverlay } from '@pages/services/FullscreenOverlay';
import { useApp } from '@brysonandrew/app';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  const [selected, setSelected] = useState<TService | null>(
    null,
  );
  const { GLOW_BOX, BORDER_RADIUS } = useApp();

  return (
    <ServicesStylesRoot
      className="title-section w-core flex flex-col gap-4 text-shadow-inherit"
      style={style}
    >
      <div className="services-inner">
        <header className="services-header">
          <p>
            Front-end development with React, Vue,
            TypeScript, and Headless WordPress — with a
            focus on performance, UX, and long-term
            maintainability.
          </p>
        </header>

        {/* Grid */}
        <div className="services-grid">
          {SERVICES.map((service) => {
            const isSelected = selected?.id === service.id;

            // While selected, render a placeholder in the grid so we
            // don't have two elements with the same layoutId.
            if (isSelected) {
              return (
                <div
                  key={service.id}
                  className="service-card service-card--placeholder"
                  aria-hidden="true"
                />
              );
            }

            return (
              <motion.button
                key={service.id}
                layoutId={service.id}
                className="service-card"
                onClick={() => setSelected(service)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  borderRadius: BORDER_RADIUS.MD,
                  boxShadow: GLOW_BOX.accent,
                }}
              >
                <h3 className="relative flex gap-2 items-stretch">
                  <div className="shrink-0">
                    {SERVICES_ICONS[service.id]}
                  </div>
                  <motion.div
                    layout
                    className="leading-none pt-0.5"
                  >
                    {service.title}
                  </motion.div>
                </h3>
                <div className="h-4" />
                <p>{service.short}</p>
                <span className="service-cta">
                  Learn more →
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {selected && (
          <ServicesFullscreenOverlay
            close={() => setSelected(null)}
            selected={selected}
          />
        )}
      </AnimatePresence>
    </ServicesStylesRoot>
  );
};
