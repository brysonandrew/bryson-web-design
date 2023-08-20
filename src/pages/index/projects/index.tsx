import { Fake3D } from '@components/fake-3d';
import { Main } from '@pages/projects/Main';
import { SECTION_TITLES } from '@constants/copy';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@components/Section';

const Projects = () => {
  return (
    <Section title={SECTION_TITLES.projects}>
      <Fake3D {...FAKE_3D_PROPS}>
        {(props) => <Main {...props} />}
      </Fake3D>
    </Section> 
  );
};

export default Projects;
