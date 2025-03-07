
import {
  CONTACT_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_WITH_NATIONAL_TRUNK,
  CV_ITEMS,
  CV_PRESETS_RECORD,
  CV_PRESETS,
  DESCRIPTION_PARAGRAPHS,
  TPresetName,
  TPresetValue,
} from 'lib/copy/base';
import { CvProvider } from '@brysonandrew/cv/CvProvider';
import { Page } from '@brysonandrew/cv/page';
import { CvControls } from '@brysonandrew/cv/controls';
import { TCvSection } from '@brysonandrew/cv';

export const Cv = () => {
  return (
    <CvControls<TPresetName, TPresetValue> initPreset='LATEST' presetsEntries={CV_PRESETS}>
      {({ filter, preset }) => (
        <>
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
            sections={
              [
                ...(preset
                  ? CV_PRESETS_RECORD[preset]
                  : CV_ITEMS),
              ] as TCvSection[]
            }
          >
            <Page style={{ filter }} />
          </CvProvider>
        </>
      )}
    </CvControls>
  );
};
