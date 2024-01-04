import { I } from '@components/Icon';
import { ADD_ICON, REMOVE_ICON } from '@constants/icons';
import { MINUS_ICON } from '@constants/icons/text';
import { useServices } from '@context/domains/services';
import clsx from 'clsx';
import { Circle } from './Circle';
import { ALL, EXTRAS } from './config';
import { Item } from './Item';
import { Money } from './Money';
import { TickList } from './TickList';

export const Extras = () => {
  const { extras, setExtras } = useServices();
  return (
    <TickList
      items={EXTRAS.map(([item, price, max], index) => {
        const isN = typeof max === 'number';
        const value = extras[item];
        const isValue = Boolean(value);
        return {
          key: item,
          children: (
            <Item id={item}>
              <Circle>{ALL.indexOf(item) + 1}</Circle>
              <div
                className={clsx(
                  'row-space gap-2 py-1 px-2 w-full',
                  !isValue && 'text-gray',
                )}
              >
                <div className='row gap-2'>
                  {isN && value > 0 && (
                    <>
                      <button
                        onClick={() => {
                          setExtras((prev) => ({
                            ...prev,
                            [item]: Math.max(
                              0,
                              ~~value - 1,
                            ),
                          }));
                        }}
                      >
                        <I icon={REMOVE_ICON} />
                      </button>
                      <div className='font-mono'>
                        {value}
                      </div>
                    </>
                  )}
                  <button
                    onClick={() => {
                      setExtras((prev) => ({
                        ...prev,
                        [item]: isN
                          ? Math.min(max, ~~value + 1)
                          : !value,
                      }));
                    }}
                  >
                    <I
                      icon={
                        isN
                          ? ADD_ICON
                          : isValue
                          ? REMOVE_ICON
                          : ADD_ICON
                      }
                    />
                  </button>
                  <span>{item}</span>
                </div>
                <Money
                  classValue={isValue ? '' : 'text-inherit'}
                >
                  {isN && value > 0
                    ? ~~value * price
                    : price}
                </Money>
              </div>
            </Item>
          ),
        };
      })}
    />
  );
};
