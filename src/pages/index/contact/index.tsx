import { Fake3D } from '@components/animation/fake-3d';
import { Main } from '@pages/contact/Main';
import { PAGE_RECORD } from '@app/routes/constants/pages';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@components/layout/Section';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';

const Contact = () => {
  return (
    <Section
      title={SECTION_RECORD[PAGE_RECORD.contact.key]}
    >
      <Fake3D {...FAKE_3D_PROPS}>
        {(props) => <Main {...props} />}
      </Fake3D>
    </Section>
  );
};

export default Contact;
