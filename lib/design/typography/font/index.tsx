import { useApp } from '@brysonandrew/app';
import { TDivProps } from '@brysonandrew/config-types';
import { FontItem } from '@brysonandrew/design/typography/font/item';
import { Moon, Sun } from '@brysonandrew/interactive';
import { Line } from '@brysonandrew/layout-line';
import { cx } from 'class-variance-authority';
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
      className={cx(
        'row-space pl-2 text-4xl',
        classValue,
      )}
      style={{
        color: COLOR[mode === 'dark' ? 'light' : 'dark'],
        backgroundColor: COLOR[mode],
        ...style,
      }}
      {...props}
    >
      <div>{{ dark: <Moon />, light: <Sun /> }[mode]}</div>
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
