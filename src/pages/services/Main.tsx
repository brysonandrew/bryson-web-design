import { useRef, useState, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { useApp } from '@brysonandrew/app';
import { TService, SERVICES } from '@pages/services/config';
import { ServicesStylesRoot } from '@pages/services/styles';
import { useOutsideClick } from '@brysonandrew/hooks-dom/useOutsideClick';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  const { COLOR } = useApp();
  const [selected, setSelected] = useState<TService | null>(
    null,
  );

  const ref = useRef(null);

  useOutsideClick({
    ref,
    handler: () => setSelected(null),
  });

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
              <h3>{service.title}</h3>
              <div className="hidden md:block">
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
          <>
            {/* Modal */}
            <motion.div
              className="services-modal-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                layoutId={selected.id}
                className="services-modal"
                ref={ref}
              >
                <button
                  className="services-modal-close"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                >
                  ✕
                </button>

                <h3>{selected.title}</h3>
                <p className="services-modal-full">
                  {selected.full}
                </p>

                <ul className="services-modal-list">
                  {selected.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </ServicesStylesRoot>
  );
};
