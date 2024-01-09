import type { FC } from 'react';
import styled from '@emotion/styled';
import { I } from '@components/Icon';
import { PLUS_ICON } from '@constants/icons/text';
import { nToMoney } from '@utils/format';

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
