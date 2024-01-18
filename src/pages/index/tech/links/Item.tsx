import { MotionValue, motion } from 'framer-motion';
import type { FC } from 'react';
import { Box } from 'lib/animation/components/filter-animate/Box';
import { useHoverKey } from 'lib/cursor/hooks/useHoverKey';
import { Aura } from 'lib/filters/aura/Aura';
import { P1_5 } from 'lib/components/layout/space/P1_5';
import { resolveParentAnimateConfig } from 'lib/animation/components/filter-animate/utils';
import { CUSTOM_CURSOR_KEY } from 'lib/cursor/switch/config';
import clsx from 'clsx';
import { TItem } from '../config/types';
import { useApp } from 'lib/context/app/useApp';
import { OPEN_IN_NEW_ICON } from 'lib/icons/constants';
import { formatUrl } from 'lib/utils/format/url';
import { Visit } from 'lib/cursor/switch/format/Visit';
import { useDarkMode } from 'lib/context';

export const Item: FC<TItem & { glow?: MotionValue }> = ({
  Icon,
  title,
  href,
  glow,
  ...props
}) => {
  const { Texture, Glow, BORDER_RADIUS, COLOR } = useApp();

  const { isDarkMode } = useDarkMode();

  const address = formatUrl(href);

  const { isHover, handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    href,
    OPEN_IN_NEW_ICON,
    <Visit>{address}</Visit>,
  );

  return (
    <motion.div
      className='relative cursor-pointer'
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    >
      {isHover && (
        <Aura
          style={{ borderRadius: BORDER_RADIUS.MD }}
          layoutId={title}
        />
      )}
      <Glow
        drop={8}
        color={COLOR.accent}
        initial={false}
        value={glow}
      >
        <Texture />
      </Glow>
      <Glow
        drop={6}
        color={COLOR.secondary}
        initial={false}
        animate={{ opacity: isHover ? 1 : 0.05 }}
      >
        <Texture />
      </Glow>
      <Glow
        text={1}
        drop={2}
        initial={false}
        color={COLOR.white}
        animate={{ opacity: isHover ? 1 : 0.05 }}
      >
        <a
          className={clsx(
            'inline-flex relative pl-4 pr-3 py-3',
          )}
          href={href}
          target='_blank'
          style={{ borderRadius: BORDER_RADIUS.MD }}
        >
          <Icon classValue='w-10 h-10 lg:(w-12 h-12)' />
          <P1_5 />
          <h4 className='title mt-0.75'>{title}</h4>
        </a>
      </Glow>
    </motion.div>
  );
};
