import { Parallax } from '@brysonandrew/parallax';
import { Main } from '@pages/pricing/Main';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@brysonandrew/base/components/layout/section';

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
