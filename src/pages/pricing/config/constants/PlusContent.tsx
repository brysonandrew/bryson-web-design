import type { FC } from 'react';
import { cx } from 'class-variance-authority';
import { I } from '@brysonandrew/icons-i';
import { P2 } from '@brysonandrew/space/P2';
import { P3 } from '@brysonandrew/space/P3';
import { P_5 } from '@brysonandrew/space/P_5';
import { TICK_CIRCLE_ICON } from '@brysonandrew/icons-keys';
import { PLUS_ICON } from '@brysonandrew/icons-keys/text';
import { useApp } from '@brysonandrew/app';
import { TStyle } from '@app/style';

export const PlusContent: FC = () => {
  const { BORDER_RADIUS, COLOR } = useApp<TStyle>();

  return (
    <>
      <div className='relative row-start gap-2 w-full leading-7 py-0.5'>
        <span
          className={cx(
            'hidden lg:block absolute top-3.875 right-full h-2px w-11 -mr-0.5 bg-standard',
          )}
        />
        <I
          icon={TICK_CIRCLE_ICON}
          className='relative w-5 h-5 mt-1 shrink-0 text-standard z-10'
        />{' '}
        <p className='leading-7 font-sans text-xl text-main'>
          <span
            className='absolute -inset-x-1.75 -inset-y-2'
            style={{
              borderRadius: BORDER_RADIUS.MD,
              borderColor: COLOR.standard,
            }}
          />
          Everything included in the{' '}
          <span className='inline-flex relative px-1.5 text-main-inverted'>
            <span
              className={cx(
                'absolute inset-0.5 bg-standard',
              )}
              style={{ backgroundColor: COLOR.standard }}
            />
            <span className='relative title-pricing'>
              Standard
            </span>
          </span>{' '}
          package
        </p>
      </div>
      <P3 />
      <P_5 />
      <div className='center'>
        <I
          className={cx(
            'shrink-0 w-5.5 h-5.5 text-current',
          )}
          icon={PLUS_ICON}
        />
      </div>
      <P2 />
    </>
  );
};
