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
import {
  isSafari,
  isMobileSafari,
} from 'react-device-detect';
import { Ending } from './ending';
import { TITLE_BASE } from '@constants/copy';
import { useHtmlTitle } from '@hooks/useHtmlTitle';

export const Index = () => {
  useHtmlTitle(`${TITLE_BASE} - Web Developer`);
  return (
    <Suspense fallback={null}>
      <MainShell>
        <Shell>
          <Build />
          <Space24 />
          <Tech />
          <Space24 />
          <Projects />
          {isSafari && !isMobileSafari ? (
            <>
              <Space16 />
              <Ending />
              <Space16 /> 
            </>
          ) : (
            <>
              <Space12 />
              <Contact />
            </>
          )}
          <Space8 />
        </Shell>
      </MainShell>
    </Suspense>
  );
};
