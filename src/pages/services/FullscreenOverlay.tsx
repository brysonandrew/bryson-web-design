import { useOutsideClick } from '@brysonandrew/hooks';
import { TService } from '@pages/services/config/types';
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
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick({
    ref,
    handler: close,
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, []);
  return (
    <>
      {/* Modal */}
      <motion.div
        className="services-modal-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div ref={ref}>
          <motion.div
            layoutId={selected.id}
            className="services-modal"
          >
            <button
              className="services-modal-close"
              onClick={close}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
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
        </div>
      </motion.div>
    </>
  );
};
