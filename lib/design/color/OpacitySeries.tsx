import type { FC } from 'react';
import type { TElementProps } from '@brysonandrew/config-types/dom';
import { INDICIES } from '@brysonandrew/config-constants';
import { useApp } from '@brysonandrew/app';
import { cx } from 'class-variance-authority';
import {
  TGrayscaleKey,
  TBaseKey,
} from '@brysonandrew/color';

type TProps = TElementProps & {
  base: TGrayscaleKey | TBaseKey;
  bgs: TBaseKey[];
};
export const ColorOpacitySeries: FC<TProps> = ({
  base,
  classValue,
  bgs,
  style,
  ...props
}) => {
  const { COLOR } = useApp();

  return (
    <div
      className='relative column-stretch w-full'
      style={style}
      {...props}
    >
      <div className='column-stretch'>
        {bgs.map((bg) => (
          <ul
            key={bg}
            className={cx(
              'grow row h-full uppercase',
              classValue,
            )}
            style={{ backgroundColor: COLOR[bg] }}
            {...props}
          >
            {INDICIES.map((n) => {
              const index = n + 1;
              const isLast = index === 10;

              const key = isLast
                ? base
                : (`${base}-0${index}` as TGrayscaleKey);
              return (
                <li
                  key={key}
                  className='grow h-full truncate px-2 py-1.5'
                  style={{
                    width: '10%',
                    backgroundColor: COLOR[key],
                    color:
                      bg === 'dark'
                        ? COLOR.white
                        : COLOR.black,
                  }}
                >
                  {`${
                    isLast ? `${key}/${bg}` : `0${index}`
                  }`}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
};
