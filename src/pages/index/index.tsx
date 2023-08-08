import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Suspense } from 'react';
import { Tech } from './tech';
import { Build } from './build';
import { Contact } from './contact';
import { Projects } from './projects';
import { Gallery } from '@components/gallery';
import { Space32 } from '@components/spaces/Space32';
import { Space48 } from '@components/spaces/Space48';
import { Space60 } from '@components/spaces/Space60';
import { LayoutGroup } from 'framer-motion';

export const Index = () => {
  return (
    <Suspense fallback={null}>
      <MainShell>
        <Shell>
          <Build />
          <Space32 />
          <Tech />
          <Space48 />
          <LayoutGroup>
            <Projects />
            <Space60 />
            <Contact />
          </LayoutGroup>
          <Space48 />
          <Gallery />
        </Shell>
      </MainShell>
    </Suspense>
  );
};
