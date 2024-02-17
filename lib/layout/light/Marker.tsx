import clsx from 'clsx';
import { TLayoutComponentProps } from '@brysonandrew/app';
import { TBlankMotionProps } from '@brysonandrew/layout-blank';
import { motion } from 'framer-motion';

type TProps = TBlankMotionProps;
export const LightMarker =
  ({ COLOR, BORDER_RADIUS, Glow }: TLayoutComponentProps) =>
  ({ classValue, style, ...props }: TProps) =>
    (
      <motion.div
        className={clsx(
          'absolute left-0 top-0 bottom-0 -mr-1 -mb-1 pointer-events-none',
          classValue,
        )}
        style={{
          width: `calc(0.5rem + 4px)`,
          height: '100%',
          ...(style ?? {}),
        }} 
        {...props}
      >
        <Glow>
          <motion.div
            className='fill opacity-group-idle' 
            style={{
              backgroundColor: COLOR.primary,
              borderRadius: BORDER_RADIUS.SM,
            }}
          />
          <motion.div
            className='fill opacity-group-hover'
            style={{
              backgroundColor: COLOR.accent,
              borderRadius: BORDER_RADIUS.SM,
            }}
          />
        </Glow>
      </motion.div>
    );
