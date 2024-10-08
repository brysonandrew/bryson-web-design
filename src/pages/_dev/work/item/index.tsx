import { FC } from 'react';
import { resolveAccessibilityHrefTitles } from '@brysonandrew/utils-attributes';
import { TUpworkFilterConfig } from '@pages/_dev/work/config/types';
import { useUpworkParams } from '@pages/_dev/work/item/useUpworkParams';
import { UPWORK_BASE } from '@pages/_dev/work/config/constants';
import {
  CUSTOM_CURSOR_KEY,
  useHoverKey,
} from '@brysonandrew/motion-cursor';
import { resolveGradient } from '@brysonandrew/color-gradient';

type TProps = TUpworkFilterConfig;
export const WorkItem: FC<TProps> = (config) => {
  const { q, ...restConfig } = config;
  const { isIntermediate, isExpert, location } = restConfig;
  const restParams = useUpworkParams({
    ...restConfig,
    hourly: { min: 40 },
  });
  const params = `q=${q}${
    restParams ? `&${restParams}` : ''
  }`;
  const href = `${UPWORK_BASE}?${params}`;
  const { handlers, isHover } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    href
  );

  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: ['to right', 'gray', 'transparent'],
  });
  return (
    <li className="relative">
      {isHover && (
        <div
          className="fill-4 opacity-20 pointer-events-none"
          style={{
            backgroundImage,
          }}
        />
      )}
      <a
        {...resolveAccessibilityHrefTitles({
          title: q ?? 'upwork',
          href,
        })}
        href={href}
        className="relative"
        target="_blank"
        {...handlers}
      >
        <ul className="row-start-space w-full gap-4">
          {q && <li className="text-2xl">{q}</li>}
          <li>
            <ul className="column-end gap-1 text-white-2">
              {location && <li>{location}</li>}
              <li>
                <ul className="row gap-2">
                  {isIntermediate && <li>Intermediate</li>}
                  {isExpert && <li>Expert</li>}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div className="text-base text-blue">{params}</div>
      </a>
    </li>
  );
};
