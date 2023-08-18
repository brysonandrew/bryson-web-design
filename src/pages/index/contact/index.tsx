import { Fake3D } from '@components/fake-3d';
import { Main } from '@pages/contact/Main';
import { SECTION_TITLES} from '@constants/copy';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@components/Section';

export const Contact = () => {
  return (
    <Section title={SECTION_TITLES.contact}>
      <Fake3D {...FAKE_3D_PROPS}>
        {(props) => <Main {...props} />}
      </Fake3D>
    </Section>
  );
};

export default Contact;
