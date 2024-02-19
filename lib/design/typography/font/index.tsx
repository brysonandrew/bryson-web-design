import { TStyle } from '@app/style';
import { useApp } from '@brysonandrew/app';
import { TDivProps } from '@brysonandrew/config-types';
import { Moon, Sun } from '@brysonandrew/dark-mode';
import { FontItem } from '@brysonandrew/design/typography/font/item';
import { Line } from '@brysonandrew/layout-line';
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
  const { COLOR, FONTS } = useApp();
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
