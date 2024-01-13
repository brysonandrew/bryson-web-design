import { Suspense, lazy } from 'react';
import { List } from './list';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Section } from '@lib/components/layout/Section';
import { P60Y } from '@lib/components/layout/space/P60Y';

const Gallery = lazy(
  () => import('@pages/projects/gallery'),
);

export const Projects = () => {
  return (
    <>
      <Section title={SECTION_RECORD.projects}>
        <List />
        <P60Y />
      </Section>
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
    </>
  );
};
