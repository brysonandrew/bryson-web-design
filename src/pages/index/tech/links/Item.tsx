import { MotionValue } from 'framer-motion';
import type { FC } from 'react';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { formatUrl } from '@brysonandrew/utils-format/url';
import { Visit } from '@brysonandrew/cursor/switch/format/Visit';
import { AURA } from '@brysonandrew/svg-filter';
import {
  TDivProps,
  TSvgProps,
  TTitleProps,
} from '@brysonandrew/config-types';
import { OPEN_IN_NEW_ICON } from '@brysonandrew/icons-keys';

export type TItemProps = TDivProps &
  TTitleProps & {
    href: string;
    Icon: FC<TSvgProps>;
  };
export const Item: FC<
  TItemProps & { glow?: MotionValue }
> = ({ Icon, title, href, glow, ...props }) => {
  const { Glow, BORDER_RADIUS, COLOR, LIGHT } = useApp();
  const address = formatUrl(href);

  const { isHover, handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    href,
    OPEN_IN_NEW_ICON,
    <Visit>{address}</Visit>,
  );

  const GlowWrap = LIGHT?.MOTION.GlowWrap ?? Glow;

  return (
    <div
      className='relative group cursor-pointer'
      {...handlers}
      {...props}
    >
      {isHover && (
        <div
          style={{
            filter: AURA.GLOBAL.value,
            borderRadius: BORDER_RADIUS.MD,
            backgroundColor: COLOR.primary,
            opacity: 0.5,
          }}
          className='fade-in fill-1 mt-1.5 ml-1 pointer-events-none'
        />
      )}
      <GlowWrap
        box={20}
        value={glow}
        color={COLOR.accent}
      />
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
