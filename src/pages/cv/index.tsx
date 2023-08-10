import { Description } from './Description';
import { Experience } from './experience';
import { Header } from './header';
import { Margin } from './layout/Margin';
import { Page } from './layout/Page';
import { Shell } from './layout/Shell';
import { Space3 } from '@components/spaces/Space3';
import { Space } from '@components/spaces/Space';
import { Space6 } from '@components/spaces/Space6';
import { Invert } from '../../components/Invert';
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
              <Space6 />
              <Margin>
                <Description />
              </Margin>
              <Space3 />
              <Margin>
                <hr className='bg-white-02 w-full h-px' />
              </Margin>
              <Space />
              <Experience />
            </Page>
            <div className='py-2' />
          </Shell>
        )}
      </Invert>
    </>
  );
};
