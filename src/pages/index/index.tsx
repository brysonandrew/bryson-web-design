import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Suspense } from 'react';
import { Tech } from './tech';
import { Build } from './build';
import { Space8 } from '@components/spaces/Space8';
import { Space6 } from '@components/spaces/Space6';
import { Space24 } from '@components/spaces/Space24';
import { Main as Showcase } from '@pages/showcase/Main';
import { Main as Contact } from '@pages/contact/Main';
import { Space16 } from '@components/spaces/Space16';

export const Index = () => (
  <Suspense fallback={null}>
    <MainShell>
      <Shell>
        <Build />
        <Space8 />
        <Space6 />
        <Tech />
        <Space16 /> 
        <Showcase />
        <Space6 />
        <Contact />
        <Space8 />
      </Shell>
    </MainShell>
  </Suspense>
);
