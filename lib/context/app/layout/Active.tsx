import { BORDER_RADIUS } from '@components/style/border-radius';
import clsx from 'clsx';
import {
  TAppConfig,
  TBlankProps,
  TLayoutRecord,
} from '../config/types';

type TProps = Pick<
  TLayoutRecord,
  'Blank' | 'GlowSecondaryAccent'
> &
  Pick<TAppConfig, 'COLOR'>;
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
