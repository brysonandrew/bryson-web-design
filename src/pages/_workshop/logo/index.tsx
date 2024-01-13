import { Laptop } from './Laptop';
import { P8 } from '@lib/components/layout/space/P8';
import { THEME_COLORS } from '@app/colors/constants';

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
            screen={THEME_COLORS['highlight']}
            trackpad={THEME_COLORS['black-1']}
            bottom={THEME_COLORS['black']}
            keyboard={THEME_COLORS['black-2']}
            body={THEME_COLORS['black-3']}
          />
        </div>
        <P8 />
        <div {...box}>
          <Laptop
            screen={THEME_COLORS['accent']}
            trackpad={THEME_COLORS['white-8']}
            bottom={THEME_COLORS['white-9']}
            keyboard={THEME_COLORS['white-7']}
            body={THEME_COLORS['white-5']}
          />
        </div>
      </div>
    </div>
  );
};
