import { TStateEntry } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import type { ChangeEvent, FC } from 'react';

const BUTTONS = [
  ['black', 0],
  ['white', 100],
] as const;

type TProps = {
  invertState: TStateEntry<number>;
};
export const CvControlsInvert: FC<TProps> = ({
  invertState: [invert, setInvert],
}) => {
  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInvert(+value);
  };

  return (
    <label className='column-start shrink-0 bg-black text-white gap-4 text-sm py-8 px-12'>
      <div className='column-start gap-2'>
        <div className='font-semibold'>Invert color</div>
        <ul>
          {BUTTONS.map(([title, value]) => (
            <li key={title}>
              <button
                className={cx('hover:text-white py-0.5 uppercase', invert === value ? 'text-white-5' : 'text-gray-5')}
                onClick={() => setInvert(value)}
              >
                {title} - {value}%
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='row gap-2'>
        <input
          value={invert}
          min='0'
          max='100'
          step='1'
          type='range'
          onChange={handleChange}
        />
      </div>
      <div>{invert}%</div>
    </label>
  );
};
