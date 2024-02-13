import type { FC } from 'react';
import type { TElementProps } from '@brysonandrew/config-types/dom';
import { INDICIES } from '@brysonandrew/config-constants';
import { useApp } from '@brysonandrew/app';
import { TGrayscaleKey } from '@brysonandrew/color';

type TProps = TElementProps & {
  base: TGrayscaleKey;
};
export const ColorSeries: FC<TProps> = ({
  base,
  ...props
}) => {
  const { COLOR } = useApp();

  return (
    <ul className='relative row w-full' {...props}>
      {INDICIES.map((n) => {
        const key =
          n === 0 ? base : (`${base}-${n}` as const);
        return (
          <li
            key={key}
            className='text-xs px-2 py-1.5 uppercase'
            style={{
              width: '10%',
              backgroundColor: COLOR[key],
              mixBlendMode: 'difference',
              color: base.includes('white')
                ? COLOR.black
                : COLOR.white,
            }}
          >
            {key}
          </li>
        );
      })}
      {/* <li
        className='absolute left-0 top-0 px-2 py-0.5 uppercase'
        style={{
          mixBlendMode: 'difference',
          color:
            base === 'white' ? COLOR[base] : COLOR.white,
        }}
      >
        {base}
      </li> */}
    </ul>
  );
};
