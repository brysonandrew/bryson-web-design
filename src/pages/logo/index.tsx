import { Laptop } from './Laptop';
import { P8 } from '@components/space/P8';
import { COLOR_VARIABLES_LOOKUP } from '@app/colors';
import { Shell } from '@components/shell';

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
            trackpad={COLOR_VARIABLES_LOOKUP['white-9-8']}
            bottom={COLOR_VARIABLES_LOOKUP['white-9']}
            keyboard={COLOR_VARIABLES_LOOKUP['white-9-7']}
            body={COLOR_VARIABLES_LOOKUP['white-9-5']}
          />
        </div>
      </div>
    </div>
  );
};
