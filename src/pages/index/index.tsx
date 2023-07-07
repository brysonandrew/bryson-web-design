import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Suspense } from 'react';
import { Tech } from './tech';
import { Build } from './build';
import { Space8 } from '@components/spaces/Space8';
import { Contact } from './contact';
import { Projects } from './projects';
import { Space24 } from '@components/spaces/Space24';
import { Space12 } from '@components/spaces/Space12';
import { Space16 } from '@components/spaces/Space16';
import { Ending } from './ending';

export const Index = () => {
  return (
    <Suspense fallback={null}>
      <MainShell>
        <Shell>
          <Build />
          <Space16 />
          <Tech />
          <Space24 />
          <Projects />
          {false ? (
            <>
              <Space12 />
              <Ending />
              <Space16 />
            </>
          ) : (
            <>
              <Space24 />
              <Contact />
            </>
          )}
          <Space8 />
        </Shell>
      </MainShell>
    </Suspense>
  );
};
