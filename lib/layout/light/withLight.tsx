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
import { TUDivProps } from '@brysonandrew/config-types/dom/unions';
import { TPartialGlowConfigOptions } from '@brysonandrew/filter-animate';

type TGlowProps = TDivProps & TPartialGlowConfigOptions;
type TGlowMotionProps = TDivMotionProps &
  TPartialGlowConfigOptions;
type TUGlowProps = TGlowProps | TGlowMotionProps;

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
  const markerProps = <T extends TUDivProps>({
    style,
    classValue,
    ...props
  }: T) => ({
    className: clsx(
      'absolute left-0 top-0 bottom-0 -mr-1 -mb-1 pointer-events-none',
      classValue,
    ),
    style: {
      width: `calc(0.5rem + 4px)`,
      height: '100%',
      ...style,
    },
    ...props,
  });

  const glowStyle = <T extends TUGlowProps>({
    style,
    text = 0,
    box = 4,
    drop = 0,
    color = COLOR.primary,
  }: T) => ({
    backgroundColor: color,
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
    color = COLOR.primary,
    classValue,
    style,
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
    color = COLOR.accent,
    style,
    classValue,
    ...props
  }: T) => ({
    style: {
      ...glowStyle<T>({ ...props, color } as T),
      ...style,
    },
    className: clsx('fill opacity-group-hover', classValue),
    ...props,
  });

  const GlowFill = (props: TGlowProps) => (
    <>
      <div {...idleProps<TDivProps>(props) as TDivProps} />
      <div {...hoverProps<TDivProps>(props) as TDivProps} />
    </>
  );

  const GlowFillMotion = ({
    ...props
  }: TGlowMotionProps) => (
    <>
      <motion.div {...idleProps<TDivMotionProps>(props)} />
      <motion.div {...hoverProps<TDivMotionProps>(props)} />
    </>
  );

  const BackMotionFill = ({
    style,
    ...props
  }: TGlowMotionProps) => (
    <_BackMotionFill
      style={{ borderRadius: BORDER_RADIUS.MD, ...style }}
      {...props}
    />
  );

  const BackFill = ({ style, ...props }: TGlowProps) => (
    <_BackFill
      style={{ borderRadius: BORDER_RADIUS.MD, ...style }}
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
      style={{ borderRadius: BORDER_RADIUS.MD, ...style }}
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

  const Marker = ({ ...props }: TDivProps) => (
    <div {...(markerProps<TDivProps>(props) as TDivProps)}>
      <GlowFill {...props} />
    </div>
  );

  const MarkerMotion = ({ ...props }: TDivMotionProps) => (
    <motion.div {...markerProps(props)}>
      <GlowFillMotion />
    </motion.div>
  );

  return {
    GlowFill,
    GlowWrap,
    Back,
    Marker,
    MOTION: {
      GlowFill: GlowFillMotion,
      GlowWrap: GlowWrapMotion,
      Back: BackMotion,
      Marker: MarkerMotion,
    },
  };
};

export type TWithLight = ReturnType<typeof withLight>;
