import { Parallax } from '@brysonandrew/parallax';
import { Main } from '@pages/pricing/Main';
import { FAKE_3D_PROPS } from './config/constants';
import { Section } from '@brysonandrew/layout/section';
import { SECTION_RECORD } from '@app/routes';

const Pricing = () => {
  return (
    <Section title={SECTION_RECORD.pricing}>
      <Parallax {...FAKE_3D_PROPS}>
        {(props) => <Main {...props} />}
      </Parallax>
    </Section>
  );
};

export default Pricing;
