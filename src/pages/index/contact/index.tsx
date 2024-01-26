import { Parallax } from '@brysonandrew/parallax';
import { Main } from '@pages/contact/Main';
import { PARALLAX_PROPS } from './constants';
import { Section } from '@brysonandrew/layout/section';
import { SECTION_RECORD, PAGE_RECORD } from '@app/routes';

const Contact = () => {
  return (
    <Section
      title={SECTION_RECORD[PAGE_RECORD.contact.key]}
    > 
      <Parallax {...PARALLAX_PROPS}>
        {(props) => <Main {...props} />}
      </Parallax>
    </Section>
  );
};

export default Contact;
