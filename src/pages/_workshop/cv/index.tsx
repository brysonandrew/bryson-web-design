import { Description } from './Description';
import { Experience } from './experience';
import { Header } from './header';
import { Margin } from './layout/Margin';
import { Page } from './layout/Page';
import { Shell } from './layout/Shell';
import { P1 } from '@brysonandrew/space/P1';
import { Invert } from './controls/Invert';
import { Variables } from '@css/Variables';

export const Cv = () => {
  return (
    <>
      <Variables />
      <Invert>
        {(filter) => (
          <Shell>
            <Page style={{ filter }}>
              <div className='column gap-12 pt-16 pb-8'>
                <Margin>
                  <Header />
                </Margin> 
                <Margin>
                  <Description />
                </Margin>
              </div>
              <P1 />
              <Experience />
            </Page>
            <div className='py-2'/>
          </Shell>
        )}
      </Invert>
    </>
  );
};
