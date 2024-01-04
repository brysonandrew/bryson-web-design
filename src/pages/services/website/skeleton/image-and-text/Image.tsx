import { I } from '@components/Icon';
import { IMAGE_ICON } from '@constants/icons';

export const Image = () => {
  return (
    <div className='relative w-1/2 h-full center px-2 bg-black rounded-b-lg'>
      <I
        icon={IMAGE_ICON}
        className='relative -top-3 object-contain w-2/3 h-2/3'
      />
    </div>
  );
};
