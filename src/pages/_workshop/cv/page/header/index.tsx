import { ContactList as Contact } from '@brysonandrew/contact-list';
import { Title } from './Title';
import { useCv } from '@pages/_workshop/cv/CvProvider';

export const Header = () => {
  const { url, email, phone } = useCv();
  return (
    <header className='row-start-space w-full'>
      <Title />
      <Contact
        classValue='column-end w-full'
        url={url}
        email={email} 
        phone={phone}
      />
    </header>
  );
};
