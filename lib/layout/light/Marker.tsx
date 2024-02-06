import clsx from 'clsx';
import { TLayoutComponentProps } from '@brysonandrew/app';
import { TBlankMotionProps } from '@brysonandrew/layout/blank';

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
      <BlankMotion
        classValue={clsx(
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
          <BlankMotion
            classValue='fill'
            style={{
              backgroundColor: COLOR.secondary,
              borderRadius: BORDER_RADIUS.SM,
            }}
            variants={{
              animate: {
                opacity: 1,
                backgroundColor: COLOR.secondary,
              },
              hover: {
                backgroundColor: COLOR.accent,
              },
            }}
          />
        </Glow>
      </BlankMotion>
    );
