import { Parallax } from '@brysonandrew/motion-parallax';
import { Main } from '@pages/contact/Main';
import { PARALLAX_PROPS } from './constants';
import { Section } from '@brysonandrew/layout-section';
import { SECTION_RECORD, PAGE_RECORDS } from '@app/routes';

const Contact = () => {
  return (
    <Section
      title={
        SECTION_RECORD[PAGE_RECORDS.record.contact.key]
      }
    >
      <Parallax {...PARALLAX_PROPS}>
        {(props) => <Main {...props} />}
      </Parallax>
    </Section>
  );
};

export default Contact;
