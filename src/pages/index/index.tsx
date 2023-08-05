import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Suspense } from 'react';
import { Tech } from './tech';
import { Build } from './build';
import { Contact } from './contact';
import { Projects } from './projects';
import { Space24 } from '@components/spaces/Space24';
import { Space16 } from '@components/spaces/Space16';
import { Gallery } from '@components/gallery';
import { LayoutGroup } from 'framer-motion';

export const Index = () => {
  return (
    <Suspense fallback={null}>
      <MainShell>
        <Shell>
          <Build />
          <Space16 />
          <Tech />
          <Space24 />
          <LayoutGroup>
            <Projects />
            <Space24 />
            <Contact />
          </LayoutGroup>
          <Space24 />
          <Gallery />
        </Shell>
      </MainShell>
    </Suspense>
  );
};
