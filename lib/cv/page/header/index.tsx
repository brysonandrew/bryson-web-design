import { ContactList as Contact } from '@brysonandrew/contact-list';
import { Title } from './Title';
import { useCv } from '@brysonandrew/cv/CvProvider';

export const Header = () => {
  const { url, email, phone } = useCv();
  return (
    <header className='row-start-space w-full'>
      <Title />
      <Contact 
        classValue='column-end w-full mt-1'
        url={url}
        // email={email} 
        // phone={phone}
        style={{fontSize: 16}}
      />
    </header>
  );
};
