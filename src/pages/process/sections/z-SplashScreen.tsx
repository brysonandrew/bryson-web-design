import { Price } from '../website/breakdown/Price';
import { Skeleton } from '../website/skeleton';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { Section } from '../Section';
import { SPLASH_SCREEN_COST } from '../website/config';
import { Annotations } from '../website/layouts/Annotations';

export const SplashScreen = () => {
  return (
    <Section title='Upgrade: Splash Screen'>
      <ParagraphLines lines={[``]} />
      <Annotations
        breakdown={
          <div className='column items-stretch gap-4'>
            <Price>{SPLASH_SCREEN_COST}</Price>
          </div>
        }
        diagram={<Skeleton />}
      />
    </Section>
  );
};
