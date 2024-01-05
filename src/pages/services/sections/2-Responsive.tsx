import { Price } from '../website/breakdown/Price';
import { Container } from '../website/skeleton/wrappers/Container';
import { View } from '../website/skeleton/wrappers/View';
import { ParagraphLines } from '../website/layouts/ParagraphLines';

export const Responsive = () => {
  return (
    <>
      <div className='column items-stretch gap-6'>
        <ParagraphLines
          lines={[
            `60% of internet traffic are mobile phone and
            tablet users.`,
            `A good website provides these users a browsing
            experience that responds well to their device.`,
            `Most importantly their screen size.`,
          ]}
        />
      </div>
      <div className='column-end gap-8 w-full md:row-start'>
        <div className='row-start w-full gap-8'>
          <div className='w-2/24'>
            <View>
              <Container>
                <div className='h-28 bg-main rounded-md' />
              </Container>
            </View>
          </div>
          <div className='w-8/24'>
            <View>
              <Container>
                <div className='h-40 bg-main rounded-md' />
              </Container>
            </View>
          </div>
          <div className='w-14/24'>
            <View>
              <Container>
                <div className='h-60 bg-main rounded-md' />
              </Container>
            </View>
          </div>
        </div>
      </div>
      <Price>{280}</Price>
    </>
  );
};
