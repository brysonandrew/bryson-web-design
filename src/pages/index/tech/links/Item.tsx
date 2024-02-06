import { MotionValue, motion } from 'framer-motion';
import type { FC } from 'react';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { resolveParentAnimateConfig } from '@app/animation';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { formatUrl } from '@brysonandrew/utils-format/url';
import { Visit } from '@brysonandrew/cursor/switch/format/Visit';
import { AURA } from '@brysonandrew/svg-filter';
import {
  TDivMotionProps,
  TSvgProps,
} from '@brysonandrew/config';
import { OPEN_IN_NEW_ICON } from '@brysonandrew/icons-keys';

export type TItemProps = TDivMotionProps & {
  title: string;
  href: string;
  Icon: FC<TSvgProps>;
};

export const Item: FC<
  TItemProps & { glow?: MotionValue }
> = ({ Icon, title, href, glow, ...props }) => {
  const { LIGHT, Back, BORDER_RADIUS, COLOR } = useApp();
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
        <motion.div
          style={{
            filter: AURA.GLOBAL.value,
            borderRadius: BORDER_RADIUS.MD,
          }}
          className='fill-1 bg-accent-04 mt-1.5 ml-1 pointer-events-none'
        />
      )}
      {LIGHT ? (
        <>
          <LIGHT.Back
            drop={8}
            color={COLOR.accent}
            initial={false}
            style={{ borderRadius: BORDER_RADIUS.MD }}
            value={glow}
          />
          <LIGHT.Glow
            drop={6}
            color={COLOR.highlight}
            initial={false}
            animate={{ opacity: isHover ? 1 : 0.05 }}
          />
        </>
      ) : (
        <Back style={{ borderRadius: BORDER_RADIUS.MD }} />
      )}
      <a
        className='row gap-2 relative pl-4 pr-3 py-3'
        href={href}
        target='_blank'
      >
        <Icon classValue='w-10 h-10 lg:(w-12 h-12)' />
        <h4 className='title-tech mt-0.75'>{title}</h4>
      </a>
    </motion.div>
  );
};
