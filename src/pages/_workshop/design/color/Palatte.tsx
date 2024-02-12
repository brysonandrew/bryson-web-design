import { useApp } from '@brysonandrew/app';
import { TMainKey } from '@brysonandrew/color';
import { TChildren } from '@brysonandrew/config-types';
import {
  CASCADE_RECORD,
  PALETTE_COLORS,
  PALETTE_COLORS_DARK_MODE,
  PALETTE_COLORS_LIGHT_MODE,
  PALETTE_TITLES,
} from '@pages/_workshop/design/config/constants';
import clsx from 'clsx';
import { FC, useMemo } from 'react';

type TProps = {
  activeKey: TMainKey;
};
export const Palatte: FC<TProps> = ({ activeKey }) => {
  const appState = useApp();
  const { COLOR } = appState;
  const items = useMemo(() => {
    const COLORS =
      activeKey === 'dark'
        ? PALETTE_COLORS_DARK_MODE
        : PALETTE_COLORS_LIGHT_MODE;
    const results = [...COLORS, ...PALETTE_COLORS].reduce(
      (items, title, index, { length: count }) => {
        const height =
          CASCADE_RECORD.heights[index] +
          CASCADE_RECORD.remainder / count;
        const typographies =
          title === activeKey ? PALETTE_TITLES : [null];
        const component = (
          <ul
            key={title}
            className='relative row-start-space px-2 py-0.5 w-full uppercase'
            style={{
              height: `${height}%`,
              backgroundColor: COLOR[title],
            }}
          >
            <li
              className='uppercase'
              style={{
                color:
                  title === 'dark'
                    ? COLOR.light
                    : COLOR.dark,
              }}
            >
              {title}
            </li>
            <div>
              {typographies.map((titleKey) => (
                <ul
                  key={titleKey}
                  className='row-start gap-2'
                >
                  {PALETTE_COLORS.filter(
                    (v) => v !== title,
                  ).map((textTitle) => (
                    <li
                      key={textTitle}
                      className={clsx('relative', titleKey)}
                      style={{
                        color: COLOR[textTitle],
                      }}
                    >
                      {titleKey === null
                        ? textTitle
                        : 'abc'}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </ul>
        );
        items.push(component);
        return items;
      },
      [] as TChildren[],
    );
    return results;
  }, [activeKey]);

  return <div className='w-full h-screen'>{items}</div>;
};
