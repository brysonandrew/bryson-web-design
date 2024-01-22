import { I } from '@brysonandrew/icons/icon';
import { IMAGE_ICON } from '@brysonandrew/icons/constants';
import { useApp } from '@brysonandrew/app';

export const Image = () => {
  const { BORDER_RADIUS } = useApp();

  return (
    <div
      className='relative w-1/2 h-full center px-2 bg-main'
      style={{
        borderBottomLeftRadius: BORDER_RADIUS.LG,
        borderBottomRightRadius: BORDER_RADIUS.LG,
      }}
    >
      <I
        icon={IMAGE_ICON}
        className='relative -top-3 object-contain dark:text-white-9 text-black-5 w-2/3 h-2/3'
      />
    </div>
  );
};
