import { Shell } from '@components/Shell';
import { Shell as MainShell } from '@main/Shell';
import { Suspense } from 'react';
import { Canvas } from './canvas';

export const Three = () => (
  <Suspense fallback={null}>
    <MainShell>
      <Shell>
        <Canvas />
      </Shell>
    </MainShell>
  </Suspense>
);
