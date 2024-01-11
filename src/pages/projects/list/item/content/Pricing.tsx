import type { FC } from 'react';
import styled from '@emotion/styled';
import { TPricingKey } from '@pages/pricing/config/types';
import clsx from 'clsx';

const Root = styled.div``;

type TProps = { type: TPricingKey };
export const Pricing: FC<TProps> = ({ type }) => {
  const BG: Record<TPricingKey, string> = {
    standard: 'bg-standard',
    plus: 'bg-plus',
    select: 'bg-select',
  };
  return <Root className={clsx('w-10 h-10 rounded-full', BG[type])} />;
};
