import { DesignColor } from '@brysonandrew/design/color';
import { DesignFont } from '@brysonandrew/design/typography/font';

export const DesignLayout = () => {
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
};
