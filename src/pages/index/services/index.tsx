import { Fake3D } from '@components/fake-3d';
import { Main } from '@pages/services/Main';
import {
  SECTION_TITLES,
  SERVICES_ID,
} from '@main/config/constants';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@components/Section';

const Services = () => {
  return (
    <Section
      id={SERVICES_ID}
      title={SECTION_TITLES.services}
    >
      <Fake3D {...FAKE_3D_PROPS}>
        {(props) => <Main {...props} />}
      </Fake3D>
    </Section>
  );
};

export default Services;
