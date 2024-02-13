import { useApp } from '@brysonandrew/app';
import { TDivProps } from '@brysonandrew/config-types';
import { Moon, Sun } from '@brysonandrew/dark-mode';
import { Line } from '@brysonandrew/layout-line';
import { FontItem } from '@pages/_workshop/design/font/item';
import { FONTS } from '@uno/presets/fonts';
import clsx from 'clsx';
import { FC, Fragment } from 'react';

type TProps = TDivProps & {
  mode: 'dark' | 'light';
};
export const DesignFont: FC<TProps> = ({
  classValue,
  style,
  mode,
  ...props
}) => {
  const { COLOR } = useApp();
  return (
    <div
      className={clsx('row-space pl-2 text-4xl', classValue)}
      style={{
        ...style,
        color: COLOR[mode === 'dark' ? 'light' : 'dark'],
        backgroundColor: COLOR[mode],
      }}
      {...props}
    >
      {{ dark: <Moon />, light: <Sun /> }[mode]}
      <ul className='column-stretch'>
        {FONTS.map((item, index, { length: count }) => {
          return (
            <Fragment key={item.key}>
              <FontItem item={item} />
              {index !== count - 1 && <Line />}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};
