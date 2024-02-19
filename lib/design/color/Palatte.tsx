import { useApp } from '@brysonandrew/app';
import { TBaseKey } from '@brysonandrew/color';
import { PALETTE_COLORS_DARK_MODE, PALETTE_COLORS, CASCADE_RECORD, PALETTE_TITLES } from '@brysonandrew/design/config/constants';
import { FC } from 'react';

type TProps = {
  activeKey: TBaseKey;
};
export const ColorPalatte: FC<TProps> = ({ activeKey }) => {
  const appState = useApp();
  const { COLOR } = appState;

  return (
    <div className='w-full'>
      {[...PALETTE_COLORS_DARK_MODE, ...PALETTE_COLORS].map(
        (title, index, { length: count }) => {
          const height =
            CASCADE_RECORD.heights[index] +
            CASCADE_RECORD.remainder / count;
          const typographies =
            title === activeKey ? PALETTE_TITLES : [null];

          return (
            <div
              key={title}
              className='relative row-start-space px-2 py-0.5 w-full uppercase'
              style={{
                height: 400, // `${height}%`,
                backgroundColor: COLOR[title],
              }}
            >
              <div
                className='uppercase'
                style={{
                  color:
                    title === 'dark'
                      ? COLOR.light
                      : COLOR.dark,
                }}
              >
                {title}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};
