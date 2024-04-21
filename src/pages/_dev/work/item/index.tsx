import { FC } from 'react';
import { resolveInteractiveHrefLabels, resolveInteractiveLabels } from '@brysonandrew/utils-attributes';
import { TUpworkFilterConfig } from '@pages/_dev/work/config/types';
import { useUpworkParams } from '@pages/_dev/work/item/useUpworkParams';
import { UPWORK_BASE } from '@pages/_dev/work/config/constants';
import {
  CUSTOM_CURSOR_KEY,
  useHoverKey,
} from 'lib/motion/cursor';
import { resolveGradient } from '@brysonandrew/color-gradient';

type TProps = TUpworkFilterConfig;
export const Item: FC<TProps> = (config) => {
  const { isIntermediate, isExpert, q, location } = config;
  const params = useUpworkParams(config);
  const href = `${UPWORK_BASE}?${params}`;
  const { handlers, isHover } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    href,
  );

  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: ['to right', 'gray', 'transparent'],
  });
  return (
    <li className='relative'>
      {isHover && (
        <div
          className='fill-4 opacity-20 pointer-events-none'
          style={{
            backgroundImage,
          }}
        />
      )}
      <a
        {...resolveInteractiveHrefLabels({title:q ?? 'upwork',href})}
        href={href}
        className='relative'
        target='_blank'
        {...handlers}
      >
        <ul className='row-start-space w-full gap-4'>
          {q && <li className='text-4xl'>{q}</li>}
          <li>
            <ul className='column-end gap-1 text-white-2'>
              {location && <li>{location}</li>}
              <li>
                <ul className='row gap-2'>
                  {isIntermediate && <li>Intermediate</li>}
                  {isExpert && <li>Expert</li>}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div className='text-base text-blue'>{params}</div>
      </a>
    </li>
  );
};
