import { Parallax } from '@lib/components/animation/parallax';
import { Main } from '@pages/contact/Main';
import { PAGE_RECORD } from '@app/routes/constants/pages';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@lib/components/layout/Section';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';

const Contact = () => {
  return (
    <Section
      title={SECTION_RECORD[PAGE_RECORD.contact.key]}
    >
      <Parallax {...FAKE_3D_PROPS}>
        {(props) => <Main {...props} />}
      </Parallax>
    </Section>
  );
};

export default Contact;
