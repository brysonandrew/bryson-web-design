import clsx from 'clsx';
import { TLayoutComponentProps } from '@brysonandrew/app';
import { TBlankMotionProps } from '@brysonandrew/layout-blank';
import { motion } from 'framer-motion';

type TProps = TBlankMotionProps;
export const LightMarker =
  ({
    BlankMotion,
    COLOR,
    BORDER_RADIUS,
    Glow,
  }: TLayoutComponentProps) =>
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
            className='fill'
            style={{
              backgroundColor: COLOR.primary,
              borderRadius: BORDER_RADIUS.SM,
            }}
            variants={{
              animate: {
                opacity: 1,
                backgroundColor: COLOR.primary,
              },
              hover: {
                backgroundColor: COLOR.accent,
              },
            }}
          />
        </Glow>
      </motion.div>
    );
