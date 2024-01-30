import { Parallax } from '@brysonandrew/parallax';
import { Main } from '@pages/projects/Main';
import { PARALLAX_PROPS } from './constants';
import { Section } from '@brysonandrew/layout/section';
import { SECTION_RECORD } from '@app/routes';

const Projects = () => {
  return (
    <Section
      id='projects'
      title={SECTION_RECORD.projects}
      classValue='z-0' // this is because projects can expand and overlap contact
    >
      <Parallax {...PARALLAX_PROPS}>
        {(props) => <Main {...props} />}
      </Parallax>
    </Section>
  );
};

export default Projects;
