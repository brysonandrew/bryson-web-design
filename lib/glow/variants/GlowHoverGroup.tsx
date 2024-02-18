import clsx from 'clsx';
import { FC } from 'react';
import { TDivProps } from '@brysonandrew/config-types';
import { TPartialGlowConfigOptions } from '@brysonandrew/filter-animate';
import {
  resolveBoxShadow,
  resolveDropShadow,
} from '@brysonandrew/color';

export type TGlowHoverGroupProps = TDivProps &
  TPartialGlowConfigOptions & {
    idleStyle: any;
    hoverStyle: any;
  };
export const GlowHoverGroup: FC<TGlowHoverGroupProps> = ({
  classValue,
  children,
  text = 0,
  box = 0,
  drop = 0,
  color = 'currentColor',
  idle,
  value,
  style,
  idleStyle,
  hoverStyle,
  ...props
}) => {
  const commonStyle = {
    ...(text > 0
      ? { textShadow: resolveBoxShadow(color, text) }
      : {}),
    ...(box > 0
      ? { boxShadow: resolveBoxShadow(color, box) }
      : {}),
    ...(drop > 0
      ? { filter: resolveDropShadow(color, drop) }
      : {}),
    ...style,
  };
  const commonProps = {
    ...props,
  };
  return (
    <>
      {children && (
        <>
          <div
            className={clsx(
              'fill opacity-group-idle',
              classValue,
            )}
            style={{ ...commonStyle, ...idleStyle, ...style }}
            {...commonProps}
          />
          <div
            className={clsx(
              'fill opacity-group-hover',
              classValue,
            )}
            style={{ ...commonStyle, ...hoverStyle, ...style }}
            {...commonProps}
          />
          {children}
        </>
      )}
    </>
  );
};
