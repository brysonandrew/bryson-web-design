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

type TConfig = TLayoutComponentProps;
export const withLight = (config: TConfig) => {
  const { COLOR, BORDER_RADIUS, BackFill, BackMotionFill } =
    config;
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
  const glowStyle = <T extends TUDivProps>({
    style,
    text = 0,
    box = 4,
    drop = 0,
    color = COLOR.primary,
  }: T & TPartialGlowConfigOptions) => ({
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
  const idleProps = <T extends TUDivProps>(
    props: T & TPartialGlowConfigOptions,
  ) => ({
    style: glowStyle<T>({ ...props, color: COLOR.primary }),
    className: clsx(
      'fill opacity-group-idle',
      props.classValue,
    ),
    ...props,
  });
  const hoverProps = <T extends TUDivProps>(
    props: T & TPartialGlowConfigOptions,
  ) => ({
    style: glowStyle<T>({ ...props, color: COLOR.accent }),
    className: clsx(
      'fill opacity-group-hover',
      props.classValue,
    ),
    ...props,
  });
  const Glow = (props: TDivProps) => (
    <>
      <div
        {...(idleProps<TDivProps>(props) as TDivProps)}
      />
      <div
        {...(hoverProps<TDivProps>(props) as TDivProps)}
      />
    </>
  );

  const GlowMotion = ({
    ...props
  }: TDivMotionProps & TPartialGlowConfigOptions) => (
    <>
      <motion.div {...idleProps<TDivMotionProps>(props)} />
      <motion.div {...hoverProps<TDivMotionProps>(props)} />
    </>
  );

  const Back = ({
    children,
    ...props
  }: TDivProps & TPartialGlowConfigOptions) => (
    <>
      <Glow {...props} />
      <BackFill {...props} />
      {children}
    </>
  );

  const BackMotion = ({
    children,
    ...props
  }: TDivMotionProps & TPartialGlowConfigOptions) => (
    <>
      <GlowMotion {...props} />
      <BackMotionFill {...props} />
      {children}
    </>
  );

  const Marker = ({ ...props }: TDivProps) => (
    <div {...(markerProps<TDivProps>(props) as TDivProps)}>
      <Glow {...props} />
    </div>
  );

  const MarkerMotion = ({ ...props }: TDivMotionProps) => (
    <motion.div {...markerProps(props)}>
      <GlowMotion />
    </motion.div>
  );

  return {
    Glow,
    Back,
    Marker,
    MOTION: {
      Glow: GlowMotion,
      Back: BackMotion,
      Marker: MarkerMotion,
    },
  };
};

export type TWithLight = ReturnType<typeof withLight>;
