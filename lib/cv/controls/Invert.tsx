import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import printSrc from './print.png';

const BUTTONS = [
  ['black', 0],
  ['white', 100],
] as const;

type TProps = {
  children(invert: string): void;
};
export const Invert: FC<TProps> = ({ children }) => {
  const [invert, setInvert] = useState(0);

  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInvert(+value);
  };

  const filter = `invert(${invert}%)`;

  return (
    <>
      {children(filter)}
      <div className='row-start gap-4'>
        <div
          className='row-start gap-4 uppercase whitespace-nowrap'
          style={{ filter }}
        >
          <label className='column-start shrink-0 bg-black text-white gap-4 text-sm py-8 px-12'>
            <div className='column-start gap-2'>
              <div className='font-semibold'>
                Invert color
              </div>
              <ul>
                {BUTTONS.map(([title, value]) => (
                  <li key={title}>
                    <button
                      className='text-gray hover:text-white py-0.5 uppercase'
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
          <div className='column-start gap-2 bg-black text-white text-sm py-8 px-12'>
            <div className='font-semibold'>
              Print instructions:
            </div>
            <div>
              <img
                src={printSrc}
                alt='Print Instructions'
                width={280}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
