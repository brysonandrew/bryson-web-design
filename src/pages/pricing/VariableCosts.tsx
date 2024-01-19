import type { FC } from 'react';
import { I } from '@brysonandrew/base/icons/icon';
import { PLUS_ICON } from '@brysonandrew/base/icons/constants/text';
import { nToMoney } from '@brysonandrew/base/utils/format';

export const VariableCosts: FC = () => {
  return (
    <div className='row gap-2 absolute top-full left-0 text-sm text-left mt-4 mx-4'>
      <I icon={PLUS_ICON} className='shrink-0 h-3' />
      <p className='text-lg text-left w-full'>
        all live sites incur {nToMoney(19.99)} per month for
        hosting
      </p>
    </div>
  );
};
