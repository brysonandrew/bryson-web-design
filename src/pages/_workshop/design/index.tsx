import { DesignFont } from '@pages/_workshop/design/font';
import { withProviders } from '@shell/providers/withProviders';
import { DesignColor } from '@pages/_workshop/design/color';
import { useApp } from '@brysonandrew/app';

export const Design = withProviders(() => {
  const { COLOR } = useApp();
  return (
    <div className='relative column-stretch text-xs'>
      <div
        className='sticky left-0 top-0 w-full z-10'
        style={{ mixBlendMode: 'difference' }}
      >
        <DesignFont mode='dark' />
        <DesignFont mode='light' />
      </div>
      <DesignColor />
    </div>
  );
});
