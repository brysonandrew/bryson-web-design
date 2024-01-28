import type { FC } from 'react';
import { BackdropBlur } from '@brysonandrew/layout';
import { Offline } from '@brysonandrew/network';

export const OfflineFC: FC = () => {
  return (
    <BackdropBlur>
      <Offline />
    </BackdropBlur>
  );
};
