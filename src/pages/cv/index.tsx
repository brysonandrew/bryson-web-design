import { Description } from './Description';
import { Experience } from './experience';
import { Header } from './header';
import { Margin } from './layout/Margin';
import { Page } from './layout/Page';
import { Shell } from './layout/Shell';
import { P3 } from '@components/layout/space/P3';
import { P1 } from '@components/layout/space/P1';
import { P6 } from '@components/layout/space/P6';
import { Invert } from './Invert';
import { Variables } from '@css/Variables';

export const Cv = () => {
  return (
    <>
      <Variables />
      <Invert>
        {(filter) => (
          <Shell>
            <Page style={{ filter }}>
              <Margin>
                <Header />
              </Margin>
              <P6 />
              <Margin>
                <Description /> 
              </Margin>
              <P3 />
              <hr className='bg-gray-02 w-full h-px' />
              <P1 />
              <Experience />
            </Page>
            <div className='py-2' />
          </Shell>
        )}
      </Invert>
    </>
  );
};
