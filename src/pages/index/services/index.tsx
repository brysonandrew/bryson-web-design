import { Fake3D } from '@components/fake-3d';
import { Main } from '@pages/pricing/Main';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@components/Section';

const Pricing = () => {
  return (
    <Section title={SECTION_RECORD.pricing}>
      <Fake3D {...FAKE_3D_PROPS}>
        {(props) => <Main {...props} />}
      </Fake3D>
    </Section>
  );
};

export default Pricing;
