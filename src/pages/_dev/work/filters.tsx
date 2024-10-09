import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  HOURLY_MAX,
  RANGE_WIDTH,
} from '@pages/_dev/work/config/constants';
import {
  TCommonState,
  useWorkState,
} from '@pages/_dev/work/context';

type TProps = {
  children(state: TCommonState): JSX.Element;
};
export const WorkFilters: FC<TProps> = ({
  children,
}) => {
  const { commonState: state, onCommonStateChange } =
    useWorkState();
  return (
    <div>
      <div className="column-stretch px-2 md:row-space">
        <div className="row-space">
  
          <div className="row gap-3 shrink-0">
            {(
              [
                ['intermediate', 'isIntermediate'],
                ['expert', 'isExpert'],
              ] as const
            ).map(([label, key]) => (
              <label className="row gap-2" key={key}>
                <input
                  name={key}
                  checked={state[key]}
                  type="checkbox"
                  onChange={onCommonStateChange}
                />
                <h3 className="capitalize">{label}</h3>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 sm:mt-0 sm:gap-8 sm:flex-row shrink-0">
          {(
            [
              ['from', 'min', 0, state.hourly.max],
              ['to', 'max', state.hourly.min, HOURLY_MAX],
            ] as const
          ).map(([label, key, min, max]) => {
            const total = HOURLY_MAX;
            const value = Number(state.hourly[key]);
            const progress = value / total;
            const x = `${(progress * RANGE_WIDTH).toFixed(
              0
            )}px`;
            return (
              <label
                className="relative row gap-0.5 sm:gap-2 mt-2"
                key={key}
              >
                <h3 className="capitalize -mt-2">
                  {label}
                </h3>
                <div
                  className="relative"
                  style={{ width: RANGE_WIDTH }}
                >
                  <motion.div
                    className="row-start absolute bottom-full left-0 gap-0.25"
                    initial={false}
                    animate={{ x }}
                  >
                    <span className="text-xs mt-0.25">
                      $
                    </span>
                    {value}
                  </motion.div>
                  <input
                    name={`hourly.${key}`}
                    value={value}
                    type="range"
                    onChange={onCommonStateChange}
                    step="1"
                    min={min}
                    max={max}
                  />
                </div>
              </label>
            );
          })}
        </div>
      </div>
      <div className="py-0.5" />
      {children(state)}
    </div>
  );
};
