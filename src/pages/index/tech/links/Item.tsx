import { MotionValue, motion } from 'framer-motion';
import type { FC } from 'react';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { formatUrl } from '@brysonandrew/utils-format/url';
import { Visit } from '@brysonandrew/cursor/switch/format/Visit';
import { AURA } from '@brysonandrew/svg-filter';
import { TDivProps, TSvgProps } from '@brysonandrew/config';
import { OPEN_IN_NEW_ICON } from '@brysonandrew/icons-keys';
import { MOTION_CONFIG } from '@brysonandrew/animation';

export type TItemProps = TDivProps & {
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
    <div
      className='relative group cursor-pointer'
      {...handlers}
      {...props}
    >
      {isHover && (
        <motion.div
          style={{
            filter: AURA.GLOBAL.value,
            borderRadius: BORDER_RADIUS.MD,
            backgroundColor: COLOR.accent,
          }}
          className='fill-1 mt-1.5 ml-1 pointer-events-none'
        />
      )}
      {LIGHT ? (
        <>
          <LIGHT.MOTION.Back
            drop={8}
            color={COLOR.accent}
            initial={false}
            style={{ borderRadius: BORDER_RADIUS.MD }}
            value={glow}
            transition={{ ...MOTION_CONFIG, delay: 0 }}
          />
          {/* <LIGHT.Glow
            drop={6}
            color={COLOR.secondary}
            initial={false}
            animate={{ opacity: isHover ? 1 : 0.05 }}
          /> */}
        </>
      ) : (
        <Back style={{ borderRadius: BORDER_RADIUS.MD }} />
      )}
      <a
        className='row gap-2 relative pl-4 pr-3 py-3'
        href={href}
        style={{ color: COLOR.accent }}
        target='_blank'
      >
        <Icon classValue='w-10 h-10 lg:(w-12 h-12)' />
        <h4 className='relative text-3xl text-shadow-inherit mt-0.75 lg:text-4xl'>
          {title}
        </h4>
      </a>
    </div>
  );
};
