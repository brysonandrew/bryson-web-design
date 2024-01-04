import { I } from '@components/Icon';
import { IMAGE_ICON } from '@constants/icons';
import { HEADLINE } from '../config';
import { Focus } from '../Focus';
import { TextLines } from './parts/TextLines';

export const Headline = () => {
  return (
    <div className='relative h-48 column-start-center px-8 w-full bg-black rounded-md'>
      <Focus>{HEADLINE}</Focus>
      <I
        icon={IMAGE_ICON}
        className='absolute left-1/2 -translate-x-2/6 h-full w-full text-gray'
      />
      <div className='relative w-2/3'>
        <TextLines classValue='text-white' />
      </div>
    </div>
  );
};
