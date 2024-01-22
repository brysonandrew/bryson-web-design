import { Laptop } from './Laptop';
import { P8 } from '@brysonandrew/base/components/layout/space/P8';
import { COLOR_VARS_RECORD } from '@app/colors/constants';

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
            screen={COLOR_VARS_RECORD['highlight']}
            trackpad={COLOR_VARS_RECORD['black-1']}
            bottom={COLOR_VARS_RECORD['black']}
            keyboard={COLOR_VARS_RECORD['black-2']}
            body={COLOR_VARS_RECORD['black-3']}
          />
        </div>
        <P8 />
        <div {...box}>
          <Laptop
            screen={COLOR_VARS_RECORD['accent']}
            trackpad={COLOR_VARS_RECORD['white-8']}
            bottom={COLOR_VARS_RECORD['white-9']}
            keyboard={COLOR_VARS_RECORD['white-7']}
            body={COLOR_VARS_RECORD['white-5']}
          />
        </div>
      </div>
    </div>
  );
};
