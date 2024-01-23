import clsx from 'clsx';
import {
  TBlankProps,
  TLayoutComponentProps,
} from '@brysonandrew/app';

type TProps = TLayoutComponentProps;
export const Marker =
  ({ Blank, COLOR, BORDER_RADIUS, Glow }: TProps) =>
  ({ classValue, style, ...props }: TBlankProps) =>
    (
      <Blank
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
          <Blank
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
      </Blank>
    );
