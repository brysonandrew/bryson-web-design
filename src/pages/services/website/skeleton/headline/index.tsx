import { I } from '@components/Icon';
import { IMAGE_ICON } from '@constants/icons';
import { TextLines } from '../parts/TextLines';
import { Shell } from './Shell';

export const Headline = () => {
  return (
    <Shell>
      <I
        icon={IMAGE_ICON}
        className='absolute left-1/2 -translate-x-2/6 h-full w-full text-gray'
      />
      <div className='relative w-2/3'>
        <TextLines classValue='text-white' />
      </div>
    </Shell>
  );
};
