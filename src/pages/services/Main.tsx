import { useState, type FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { SERVICES } from '@pages/services/config/constants';
import { ServicesStylesRoot } from '@pages/services/styles';
import { TService } from '@pages/services/config/types';
import { SERVICES_ICONS } from '@pages/services/icons';
import { ServicesFullscreenOverlay } from '@pages/services/FullscreenOverlay';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  const [selected, setSelected] = useState<TService | null>(
    null,
  );

  return (
    <ServicesStylesRoot
      className="title-section w-core flex flex-col gap-4"
      style={style}
    >
      <div className="services-inner">
        <header className="services-header">
          <h2>Services</h2>
          <p>
            Front-end development with React, Vue,
            TypeScript, and Headless WordPress — with a
            focus on performance, UX, and long-term
            maintainability.
          </p>
        </header>

        {/* Grid */}
        <div className="services-grid">
          {SERVICES.map((service) => (
            <motion.button
              key={service.id}
              layoutId={service.id}
              className="service-card"
              onClick={() => setSelected(service)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="flex gap-2 items-stretch">
                <div className="shrink-0">
                  {SERVICES_ICONS[service.id]}
                </div>
                <div className="leading-none pt-0.5">
                  {service.title}
                </div>
              </h3>
              <div className="">
                <div className="h-4" />

                <p>{service.short}</p>
                <span className="service-cta">
                  Learn more →
                </span>
              </div>
            </motion.button>
          ))}
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
