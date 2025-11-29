import { Parallax } from '@brysonandrew/motion-parallax';
import { PARALLAX_PROPS } from './config/constants';
import { Section } from '@brysonandrew/layout-section';
import { SECTION_RECORD } from '@app/routes';
import { Main } from '@pages/about/Main';

const Tech = () => (
  <Section title={SECTION_RECORD.about}>
    <Parallax {...PARALLAX_PROPS}>
      {(props) => <Main {...props} />}
    </Parallax>
  </Section> 
);

export default Tech;
