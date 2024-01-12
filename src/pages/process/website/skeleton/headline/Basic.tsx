import { I } from '@components/decoration/Icon';
import { IMAGE_ICON } from '@constants/icons';
import { Shell } from './Shell';

export const Basic = () => {
  return (
    <Shell>
      <I
        icon={IMAGE_ICON}
        className='absolute left-1/2 -translate-x-2/6 h-full w-full text-gray'
      />
    </Shell>
  );
};
