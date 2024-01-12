import type { FC } from 'react';
import styled from '@emotion/styled';
import { TPricingKey } from '@pages/pricing/config/types';
import clsx from 'clsx';

const Root = styled.div``;

type TProps = { type: TPricingKey };
export const Pricing: FC<TProps> = ({ type }) => {
  const BG: Record<TPricingKey, string> = {
    standard: 'bg-standard gradient-standard',
    plus: 'bg-plus gradient-plus',
    select: 'bg-select gradient-select',
  };
  return (
    <Root
      className={clsx(
        'center px-4 py-3 h-10 rounded-xl font-semibold text-black-9 capitalize',
        BG[type],
      )}
    >
      {type}
    </Root>
  );
};
