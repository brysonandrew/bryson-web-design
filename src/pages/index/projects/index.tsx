import { Parallax } from '@brysonandrew/parallax';
import { Main } from '@pages/projects/Main';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@brysonandrew/layout/section';
import { SECTION_RECORD } from '@app/routes';

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
