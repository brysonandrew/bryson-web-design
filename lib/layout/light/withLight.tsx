import clsx from 'clsx';
import { motion } from 'framer-motion';
import { TLayoutComponentProps } from '@brysonandrew/app/config/types/layout';
import {
  resolveBoxShadow,
  resolveDropShadow,
} from '@brysonandrew/color-glow';
import {
  TDivMotionProps,
  TDivProps,
} from '@brysonandrew/config-types';
import { TPartialGlowConfigOptions } from '@brysonandrew/filter-animate';
import {
  TGlowProps,
  TUGlowProps,
  TGlowMotionProps,
} from '@brysonandrew/layout-light/config/types';
import { Marker } from '@brysonandrew/layout-light/marker';
import { MarkerMotion } from '@brysonandrew/layout-light/marker/Motion';

type TConfig = TLayoutComponentProps;
export const withLight = (config: TConfig) => {
  const {
    COLOR,
    BORDER_RADIUS,
    BackFill: _BackFill,
    BackMotionFill: _BackMotionFill,
    Glow,
  } = config;
  const commonStyle = { borderRadius: BORDER_RADIUS.MD };

  const glowStyle = <T extends TUGlowProps>({
    style,
    text = 0,
    box = 4,
    drop = 0,
    color = COLOR.primary,
    isBackground,
  }: T) => ({
    ...(isBackground ? { backgroundColor: color } : {}),
    ...(text > 0
      ? { textShadow: resolveBoxShadow(color, text) }
      : {}),
    ...(box > 0
      ? { boxShadow: resolveBoxShadow(color, box) }
      : {}),
    ...(drop > 0
      ? { filter: resolveDropShadow(color, drop) }
      : {}),
    ...commonStyle,
    ...style,
  });

  const idleProps = <T extends TUGlowProps>({
    classValue,
    style,
    color = COLOR.primary,
    ...props
  }: T) => ({
    style: {
      ...glowStyle<T>({
        ...props,
        color,
      } as T),
      ...style,
    },
    className: clsx('fill opacity-group-idle', classValue),
    ...props,
  });

  const hoverProps = <T extends TUGlowProps>({
    classValue,
    style,
    color = COLOR.accent,
    ...props
  }: T) => ({
    style: {
      ...glowStyle<T>({ ...props, color } as T),
      ...style,
    },
    className: clsx('fill opacity-group-hover', classValue),
    ...props,
  });

  const GlowFillBorder = (props: TGlowProps) => (
    <>
      <div
        {...(idleProps<TDivProps>(props) as TDivProps)}
      />
      <div
        {...(hoverProps<TDivProps>(props) as TDivProps)}
      />
    </>
  );

  const GlowFill = (props: TGlowProps) => (
    <GlowFillBorder {...props} isBackground />
  );

  const GlowFillBorderMotion = (
    props: TGlowMotionProps,
  ) => (
    <>
      <motion.div {...idleProps<TDivMotionProps>(props)} />
      <motion.div {...hoverProps<TDivMotionProps>(props)} />
    </>
  );

  const GlowFillMotion = (props: TGlowMotionProps) => (
    <GlowFillBorderMotion {...props} isBackground />
  );

  const BackMotionFill = ({
    style,
    ...props
  }: TGlowMotionProps) => (
    <_BackMotionFill
      style={{ ...commonStyle, ...style }}
      {...props}
    />
  );

  const BackFill = ({ style, ...props }: TGlowProps) => (
    <_BackFill
      style={{ ...commonStyle, ...style }}
      {...props}
    />
  );

  const GlowWrap = ({
    text = 0,
    box = 4,
    drop = 0,
    color = COLOR.primary,
    children,
    style,
    classValue,
    ...props
  }: TGlowProps) => {
    return (
      <div
        className={clsx('relative group', classValue)}
        style={{ ...commonStyle, ...style }}
        {...props}
      >
        <GlowFill
          text={text}
          box={box}
          drop={drop}
          color={color}
          style={{ ...commonStyle, ...style }}
          {...props}
        />
        {children}
      </div>
    );
  };

  const GlowWrapMotion = ({
    children,
    style,
    color = COLOR.secondary,
    ...props
  }: TDivMotionProps & TPartialGlowConfigOptions) => (
    <Glow
      color={color}
      style={{ ...commonStyle, ...style }}
      {...props}
    >
      <>{children ?? <BackMotionFill />}</>
    </Glow>
  );

  const Back = ({
    children,
    ...props
  }: TDivProps & TPartialGlowConfigOptions) => (
    <>
      <GlowFill {...props} />
      <BackFill {...props} />
      {children}
    </>
  );

  const BackMotion = ({
    children,
    ...props
  }: TDivMotionProps & TPartialGlowConfigOptions) => (
    <>
      <GlowFillMotion {...props} />
      <BackMotionFill {...props} />
      {children}
    </>
  );

  return {
    GlowFill,
    GlowFillBorder,
    GlowWrap,
    Back,
    Marker: Marker(GlowFill),
    MOTION: {
      GlowFill: GlowFillMotion,
      GlowFillBorder: GlowFillBorderMotion,
      GlowWrap: GlowWrapMotion,
      Back: BackMotion,
      Marker: MarkerMotion(GlowFillMotion),
    },
  };
};

export type TWithLight = ReturnType<typeof withLight>;
