import { Parallax } from '@lib/components/animation/parallax';
import { List as Main } from '@pages/projects/list';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@lib/components/layout/Section';

const Projects = () => {
  return (
    <Section
      id='projects'
      title={SECTION_RECORD.projects}
      classValue='z-20' // this is because projects can expand and overlap contact
    >
      <Parallax {...FAKE_3D_PROPS}>
        {(props) => <Main {...props} />}
      </Parallax>
    </Section>
  );
};

export default Projects;
