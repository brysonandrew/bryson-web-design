import type { FC } from 'react';
import { BackBlur } from '@brysonandrew/layout-back';
import { Offline } from '@brysonandrew/network';

export const OfflineFc: FC = () => {
  return (
    <BackBlur>
      <Offline />
    </BackBlur>
  );
};
