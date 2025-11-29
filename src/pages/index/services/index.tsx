import { Parallax } from '@brysonandrew/motion-parallax';
import { PARALLAX_PROPS } from './config/constants';
import { Section } from '@brysonandrew/layout-section';
import { SECTION_RECORD } from '@app/routes';
import { Main } from '@pages/services/Main';

const Tech = () => (
  <Section title={SECTION_RECORD.services}>
    <Parallax {...PARALLAX_PROPS}>
      {(props) => <Main {...props} />}
    </Parallax>
  </Section> 
);

export default Tech;
