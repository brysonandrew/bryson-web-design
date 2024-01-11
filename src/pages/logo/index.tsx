import { Laptop } from './Laptop';
import { P8 } from '@components/layout/space/P8';
import { COLOR_VARIABLES_LOOKUP } from '@uno/theme/colors';

const SIZE = 200;
const box = {
  style: { width: SIZE, height: SIZE },
};

export const Logo = () => {
  return (
    <div className='relative w-screen h-screen center bg-gray'>
      <div className='row'>
        <div {...box}>
          <Laptop
            screen={COLOR_VARIABLES_LOOKUP['highlight']}
            trackpad={COLOR_VARIABLES_LOOKUP['black-1']}
            bottom={COLOR_VARIABLES_LOOKUP['black']}
            keyboard={COLOR_VARIABLES_LOOKUP['black-2']}
            body={COLOR_VARIABLES_LOOKUP['black-3']}
          />
        </div>
        <P8 />
        <div {...box}>
          <Laptop
            screen={COLOR_VARIABLES_LOOKUP['accent']}
            trackpad={COLOR_VARIABLES_LOOKUP['white-8']}
            bottom={COLOR_VARIABLES_LOOKUP['white-9']}
            keyboard={COLOR_VARIABLES_LOOKUP['white-7']}
            body={COLOR_VARIABLES_LOOKUP['white-5']}
          />
        </div>
      </div>
    </div>
  );
};
