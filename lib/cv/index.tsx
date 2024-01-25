import { Page } from './page';
import { Invert } from './controls/Invert';
import { Variables } from '@css/Variables';
import { CvProvider } from '@pages/_workshop/cv/CvProvider';
import {
  CONTACT_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_WITH_NATIONAL_TRUNK,
  CV_ITEMS,
  DESCRIPTION_PARAGRAPHS,
} from '@app/copy';

export const Cv = () => {
  return (
    <CvProvider
      name='Andrew Bryson'
      jobTitle='Front-end web developer'
      url={CONTACT_URL}
      email={CONTACT_EMAIL}
      phone={{
        display: CONTACT_PHONE,
        withTrunk: CONTACT_PHONE_WITH_NATIONAL_TRUNK,
      }}
      descriptionParagraphs={DESCRIPTION_PARAGRAPHS}
      sections={CV_ITEMS}
    >
      <Variables />
      <Invert>
        {(filter) => <Page style={{ filter }} />}
      </Invert>
    </CvProvider>
  );
};
