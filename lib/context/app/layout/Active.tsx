import styled from '@emotion/styled';
import { BORDER_RADIUS } from '@app/style/border-radius';
import clsx from 'clsx';
import {
  TAppConfig,
  TBlankProps,
  TLayoutRecord,
} from '../config/types';

type TProps = Pick<TLayoutRecord, 'Blank'> &
  Pick<TAppConfig, 'COLOR'>;
export const Active =
  ({ Blank, COLOR }: TProps) =>
  ({ classValue, style, ...props }: TBlankProps) =>
    (
      <Blank
        className={clsx(
          'absolute left-0 top-0 bottom-0 -mr-1 -mb-1 pointer-events-none',
          classValue,
        )}
        style={{
          width: `calc(0.5rem + 4px)`,
          height: '100%',
          borderRadius: BORDER_RADIUS.SM,
          ...(style ?? {}),
        }}
        initial={false}
        variants={{
          animate: {
            backgroundColor: COLOR.secondary,
          },
          hover: {
            backgroundColor: COLOR.accent,
          },
        }}
        {...props}
      />
    );
