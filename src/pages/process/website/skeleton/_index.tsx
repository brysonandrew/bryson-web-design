import { Container } from './wrappers/Container';
import { Footer } from './Footer';
import { Header } from './header';
import { Headline } from './headline';
import { ImageAndText } from './image-and-text';
import { View } from './wrappers/View';
import { Tablet } from './Tablet';
import { Mobile } from './Mobile';
import { useServicesC } from '@context/domains/services/useServicesC';
import {
  CONTACT_FORM,
  MOBILE_SIZE,
  TABLET_SIZE,
} from '../config';
import { ContactForm } from './contact-form';

export const Skeleton = () => {
  const { extras } = useServicesC();
  const isMobile = Boolean(extras[MOBILE_SIZE]);
  const isTablet = Boolean(extras[TABLET_SIZE]);
  const isContactForm = Boolean(extras[CONTACT_FORM]);

  return (
    <div className='column gap-6'>
      <View>
        <Container>
          <Header />
          <Headline />
          <ImageAndText />
          {isContactForm && <ContactForm />}
          <Footer />
        </Container>
      </View>
      {(isTablet || isMobile) && (
        <div className='row gap-6 h-60 w-full'>
          {isTablet && <Tablet />}
          {isMobile && <Mobile />}
        </div>
      )}
    </div>
  );
};
