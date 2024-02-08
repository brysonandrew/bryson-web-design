import type { FC } from 'react';
import { BackBlur } from '@brysonandrew/layout';
import { Offline } from '@brysonandrew/network';

export const OfflineFC: FC = () => {
  return (
    <BackBlur>
      <Offline />
    </BackBlur>
  );
};
