import clsx from 'clsx';
import { TDefaultStyle } from '../config/types';
import {
  TLayoutRecord,
  TBlankProps,
} from '../hooks/layout/types';
import { BORDER_RADIUS } from '../style/border-radius';

type TProps = Pick<
  TLayoutRecord,
  'Blank' | 'GlowSecondaryAccent'
> &
  Pick<TDefaultStyle, 'COLOR'>;
export const Active =
  ({ Blank, COLOR, GlowSecondaryAccent }: TProps) =>
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
        <GlowSecondaryAccent>
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
        </GlowSecondaryAccent>
      </Blank>
    );
