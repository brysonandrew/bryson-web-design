import { FC } from 'react';
import {
  HOURLY_MAX,
  RANGE_WIDTH,
} from '@pages/_dev/work/config/constants';
import {
  TCommonState,
  useWorkState,
} from '@pages/_dev/work/context';
import clsx from 'clsx';
import { WorkItemBox } from '@pages/_dev/work/item/box';
import { WorkFiltersHourly } from '@pages/_dev/work/filters/hourly';

type TProps = {
  children(state: TCommonState): JSX.Element;
};
export const WorkFilters: FC<TProps> = ({ children }) => {
  const {
    commonState: state,
    keyRecord,
    onCommonStateChange,
  } = useWorkState();
  return (
    <div>
      <div className="column-stretch px-0 md:row-space">
        <div className="row-space">
          <div className="row gap-1 shrink-0">
            {(
              [
                ['intermediate', 'isIntermediate'],
                ['expert', 'isExpert'],
              ] as const
            ).map(([label, key]) => {
              const isChecked = state[key];

              return (
                <label
                  className={clsx('relative')}
                  key={key}
                >
                  <WorkItemBox
                    isActive={isChecked}
                    background={{
                      classValue: 'opacity-20',
                    }}
                  >
                    <input
                      name={key}
                      checked={isChecked}
                      type="checkbox"
                      onChange={onCommonStateChange}
                      className={clsx(
                        'opacity-0 absolute inset-0'
                      )}
                    />
                    <h3 className="relative capitalize">
                      {label}
                    </h3>
                  </WorkItemBox>
                </label>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4 sm:mt-0 sm:gap-2 sm:flex-row shrink-0">
          {(
            [
              ['from', 'min', 0, state.hourly.max],
              ['to', 'max', state.hourly.min, HOURLY_MAX],
            ] as const
          ).map(([prefix, key, min, max]) => {
            const total = HOURLY_MAX;
            const value = Number(state.hourly[key]);
            const progress = value / total;
            const x = `${(progress * RANGE_WIDTH).toFixed(
              0
            )}px`;
            return (
              <WorkFiltersHourly
                key={key}
                name={`hourly.${key}`}
                value={value}
                type="range"
                onChange={onCommonStateChange}
                step="1"
                min={min}
                max={max}
                x={x}
                prefix={prefix}
              />
            );
          })}
        </div>
      </div>
      <div className="py-0.5" />
      {children(state)}
    </div>
  );
};
