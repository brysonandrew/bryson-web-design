import { ColorOpacitySeries } from '@pages/_workshop/design/color/OpacitySeries';
import { ColorPalatte } from '@pages/_workshop/design/color/Palatte';
import { ColorSeries } from '@pages/_workshop/design/color/Series';

export const DesignColor = () => {
  return (
    <>
      <ColorPalatte activeKey='dark' />
      <div>
        <ColorSeries base='white' />
        <ColorSeries base='gray' />
        <ColorSeries base='black' />
        <ColorOpacitySeries
          base='primary'
          bgs={['dark', 'light']}
        />
        <ColorOpacitySeries
          base='secondary'
          bgs={['dark', 'light']}
        />
        <ColorOpacitySeries
          base='accent'
          bgs={['dark', 'light']}
        />
      </div>
      <div className='h-screen' />
    </>
  );
};
