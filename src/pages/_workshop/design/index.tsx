import { ColorSeries } from '@pages/_workshop/design/color/ColorSeries';
import { OpacitySeries } from '@pages/_workshop/design/color/OpacitySeries';
import { Palatte } from '@pages/_workshop/design/color/Palatte';
import { withProviders } from '@shell/providers/withProviders';

export const Design = withProviders(() => {
  return (
    <div className='column-end text-xs'>
      <Palatte activeKey='dark' />
      <ColorSeries base='white' />
      <ColorSeries base='gray' />
      <ColorSeries base='black' />
      <OpacitySeries
        base='primary'
        bgs={['dark', 'light']}
      />
      <OpacitySeries
        base='secondary'
        bgs={['dark', 'light']}
      />
      <OpacitySeries
        base='accent'
        bgs={['dark', 'light']}
      />
    </div>
  );
});
