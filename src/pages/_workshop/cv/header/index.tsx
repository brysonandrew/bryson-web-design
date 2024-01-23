import { ContactList as Contact } from '@brysonandrew/contact-list';
import { Title } from './Title';
import { CONTACT_CV_HEADER } from '@app/copy';

export const Header = () => (
  <header className='row-start-space w-full'>
    <Title />
    <Contact
      classValue='column-end w-full'
      {...CONTACT_CV_HEADER}
    />
  </header>
);
