import { Laptop } from './Laptop';
import { P8 } from '@brysonandrew/space/P8';
import { COLOR_CSS_VARS_RECORD }from '@app/color';

export const Logo = () => {
  const SIZE = 200;
  const box = {
    style: { width: SIZE, height: SIZE },
  };

  return (
    <div className='relative w-screen h-screen center bg-gray'>
      <div className='row'>
        <div {...box}>
          <Laptop
            screen={COLOR_CSS_VARS_RECORD['highlight']}
            trackpad={COLOR_CSS_VARS_RECORD['black-1']}
            bottom={COLOR_CSS_VARS_RECORD['black']}
            keyboard={COLOR_CSS_VARS_RECORD['black-2']}
            body={COLOR_CSS_VARS_RECORD['black-3']}
          />
        </div>
        <P8 />
        <div {...box}>
          <Laptop
            screen={COLOR_CSS_VARS_RECORD['accent']}
            trackpad={COLOR_CSS_VARS_RECORD['white-8']}
            bottom={COLOR_CSS_VARS_RECORD['white']}
            keyboard={COLOR_CSS_VARS_RECORD['white-7']}
            body={COLOR_CSS_VARS_RECORD['white-5']}
          />
        </div>
      </div>
    </div>
  );
};
