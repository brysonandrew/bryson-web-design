import { Line } from '@components/Line';
import { Shell } from '@components/Shell';
import { Shell as MainShell } from '@main/Shell';
import { Suspense } from 'react';
import { Tech } from './tech';
import { Build } from './build';
import { Clients } from './clients';
import { Ending } from './ending';
import { Space8 } from '@components/spaces/Space8';
import { Space6 } from '@components/spaces/Space6';
import { Space12 } from '@components/spaces/Space12';
import { Space24 } from '@components/spaces/Space24';
import { HeaderOffset } from '@components/spaces/HeaderOffset';

export const Index = () => (
  <Suspense fallback={null}>
    <MainShell>
      <Shell>
        <HeaderOffset />
        <Build />
        <Space8 />
        <Line />
        <Space6 />
        <Tech />
        <Space6 />
        <Line />
        <Space6 />
        <Clients />
        <Space6 />
        <Line />
        <Space12 />
        <Ending />
        <Space24 />
      </Shell>
    </MainShell>
  </Suspense>
);
