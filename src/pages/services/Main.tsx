import { useState, type FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { SERVICES } from '@pages/services/config/constants';
import { ServicesStylesRoot } from '@pages/services/styles';
import { TService } from '@pages/services/config/types';
import { ServicesFullscreenOverlay } from '@pages/services/FullscreenOverlay';
import { ServicesCard } from '@pages/services/Card';
import { useApp } from '@brysonandrew/app';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  const { LIGHT } = useApp();
  const [selected, setSelected] = useState<TService | null>(
    null,
  );

  return (
    <ServicesStylesRoot
      className="title-section w-core flex flex-col gap-4 text-shadow-inherit"
      style={style}
    >
      <div className="services-inner">
        <header className="relative services-header">
          {LIGHT && (
            <>
              {/* <LIGHT.MOTION.Back /> */}
              {/* <LIGHT.MOTION.Marker classValue="z-50" /> */}
            </>
          )}
          <p className='pl-0' >
            Front-end development with React, Vue,
            TypeScript, and Headless WordPress — with a
            focus on performance, UX, and long-term
            maintainability.
          </p>
        </header>

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
              <ServicesCard
                key={service.id}
                service={service}
                onServiceSelect={setSelected}
              />
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
