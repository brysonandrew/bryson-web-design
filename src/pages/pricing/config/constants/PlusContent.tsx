import type { FC } from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { I } from '@components/decoration/Icon';
import { P2 } from '@components/layout/space/P2';
import { P3 } from '@components/layout/space/P3';
import { P_5 } from '@components/layout/space/P_5';
import { TICK_CIRCLE_ICON } from '@constants/icons';
import { PLUS_ICON } from '@constants/icons/text';

const Root = styled.div``;

export const PlusContent: FC = () => {
  return (
    <Root>
      <>
        <div className='relative row-start gap-2 w-full leading-7 py-0.5'>
          <span
            className={clsx(
              'hidden lg:block absolute top-3.875 right-full h-2px w-12 -mr-0.5 bg-standard',
            )}
          />
          <I
            icon={TICK_CIRCLE_ICON}
            className='relative w-5 h-5 mt-1 shrink-0 text-standard z-10'
          />{' '}
          <p className='leading-7 font-sans text-xl text-main'>
            <span className='absolute -inset-x-1.75 -inset-y-2 rounded-md border-2 border-standard' />
            Everything included in the{' '}
            <span className='inline-flex relative px-1.5 text-main-inverted'>
              <span
                className={clsx(
                  'absolute inset-0.5 bg-standard',
                )}
              />
              <span className='relative'>Standard</span>
            </span>{' '}
            package
          </p>
        </div>
        <P3 />
        <P_5 />
        <div className='center'>
          <I
            className={clsx(
              'shrink-0 w-5.5 h-5.5 text-current',
            )}
            icon={PLUS_ICON}
          />
        </div>
        <P2 />
      </>
    </Root>
  );
};
