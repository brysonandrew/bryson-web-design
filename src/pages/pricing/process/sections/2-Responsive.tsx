import { Price } from '../website/breakdown/Price';
import { Container } from '../website/skeleton/wrappers/Container';
import { View } from '../website/skeleton/wrappers/View';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { RESPONSIVE_COST } from '../website/config';
import { Annotations } from '../website/layouts/Annotations';
import { Section } from '../Section';
import { useApp } from '@brysonandrew/app/useApp';

export const Responsive = () => {
  const { Blank } = useApp();

  return (
    <Section title='Upgrade: Mobile Friendly'>
      <div className='column-stretch gap-6'>
        <ParagraphLines
          lines={[
            `60% of internet traffic comes from mobile phone and
            tablet users.`,
            `Provide your users with a browsing
            experience that responds well to their preferred device.`,
          ]}
        />
      </div>
      <Annotations
        breakdown={<Price>{RESPONSIVE_COST}</Price>}
        diagram={
          <div className='relative column w-full'>
            <div className='relative w-11/12'>
              <View classValue='px-4'>
                <div className='h-60 w-full bg-main' />
              </View>
            </div>
            <div className='absolute left-1/2 -bottom-6 -translate-x-1/2 row-end w-full gap-16'>
              <div className='w-1/6'>
                <View>
                  <Container>
                    <Blank className='h-28 bg-main' />
                  </Container>
                </View>
              </div>
              <div className='w-5/6'>
                <View classValue='px-4'>
                  <Blank className='h-40 w-full bg-main' />
                </View>
              </div>
            </div>
          </div>
        }
      />
    </Section>
  );
};
