import {
  CONTACT_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_WITH_NATIONAL_TRUNK,
  CV_ITEMS,
  DESCRIPTION_PARAGRAPHS,
} from '@app/copy';
import { CvProvider } from '@brysonandrew/cv/CvProvider';
import { Page } from '@brysonandrew/cv/page';
import { Invert } from '@brysonandrew/cv/controls/Invert';
import { css, Global } from '@emotion/react';
import { COLOR_VARS_CSS } from '@app/color';

export const Cv = () => {
  const globalCss = css`
    :root {
      ${COLOR_VARS_CSS}
    }
  `;
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
      <Global styles={globalCss} />
      <Invert>
        {(filter) => <Page style={{ filter }} />}
      </Invert>
    </CvProvider>
  );
};
