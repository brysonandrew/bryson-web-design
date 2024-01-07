import { I } from '@components/Icon';
import { IMAGE_ICON } from '@constants/icons';

export const Image = () => {
  return (
    <div className='relative w-1/2 h-full center px-2 bg-main rounded-b-lg'>
      <I
        icon={IMAGE_ICON}
        className='relative -top-3 object-contain dark:text-white-9 text-black w-2/3 h-2/3'
      />
    </div>
  );
};
