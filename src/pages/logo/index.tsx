import { COLOR_VARIABLES_LOOKUP } from '@constants/colors';
import { Laptop } from './Laptop';
import { Shell } from '@main/Shell';
import { P8 } from '@components/space/P8';

const SIZE = 200;
const box = {
  style: { width: SIZE, height: SIZE },
};

export const Logo = () => {
  return (
    <Shell>
      <div className='relative w-screen h-screen center bg-gray'>
        <div className='row'>
          <div {...box}>
            <Laptop
              screen={COLOR_VARIABLES_LOOKUP['teal-bright']}
              trackpad={COLOR_VARIABLES_LOOKUP['black-1']}
              bottom={COLOR_VARIABLES_LOOKUP['black']}
              keyboard={COLOR_VARIABLES_LOOKUP['black-2']}
              body={COLOR_VARIABLES_LOOKUP['black-3']}
            />
          </div>
          <P8 />
          <div {...box}>
            <Laptop
              screen={COLOR_VARIABLES_LOOKUP['baby-blue']}
              trackpad={COLOR_VARIABLES_LOOKUP['white-1']}
              bottom={COLOR_VARIABLES_LOOKUP['white']}
              keyboard={COLOR_VARIABLES_LOOKUP['white-2']}
              body={COLOR_VARIABLES_LOOKUP['white-3']}
            />
          </div>
        </div>
      </div>
    </Shell>
  );
};
