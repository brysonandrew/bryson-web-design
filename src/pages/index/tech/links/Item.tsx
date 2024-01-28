import { MotionValue, motion } from 'framer-motion';
import type { FC } from 'react';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { Target } from '@brysonandrew/filters/aura/Target';
import { P1_5 } from '@brysonandrew/space/P1_5';
import { resolveParentAnimateConfig } from '@app/animation';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import clsx from 'clsx';
import { useApp } from '@brysonandrew/app';
import { OPEN_IN_NEW_ICON } from '@brysonandrew/icons/config/constants';
import { formatUrl } from '@brysonandrew/utils/format/url';
import { Visit } from '@brysonandrew/cursor/switch/format/Visit';
import { Shell } from './Shell';
import { TItem } from '@pages/index/tech/config/types';

export const Item: FC<TItem & { glow?: MotionValue }> = ({
  Icon,
  title,
  href,
  glow,
  ...props
}) => {
  const { Glow, BORDER_RADIUS, COLOR } = useApp();
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
        <Target
          style={{ borderRadius: BORDER_RADIUS.MD }}
          layoutId={title}
        />
      )}
      {Glow && (
        <>
          <Glow.Back
            drop={8}
            color={COLOR.accent}
            initial={false}
            value={glow}
          />
          <Glow.Back
            drop={6}
            color={COLOR.secondary}
            initial={false}
            animate={{ opacity: isHover ? 1 : 0.05 }}
          />
        </>
      )}
      <Shell isHover={isHover}>
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
      </Shell>
    </motion.div>
  );
};
