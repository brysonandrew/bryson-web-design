import { I } from '@components/Icon';
import { IMAGE_ICON } from '@constants/icons';
import { SECTION } from '../config';
import { Focus } from '../Focus';
import { TextLines } from './parts/TextLines';

export const ImageAndText = () => {
  return (
    <div className='relative w-full h-48 column-start'>
      <div className='w-full px-2 h-12 bg-black rounded-t-lg'>
        <Focus>{SECTION}</Focus>
      </div>
      <div className='row-start gap-4 w-full'>
        <div className='relative w-1/2 center px-2 bg-black rounded-b-lg'>
          <I
            icon={IMAGE_ICON}
            className='relative -top-3 object-contain w-2/3 h-2/3'
          />
        </div>
        <ul className='column grow gap-3 w-1/2'>
          <div className='h-8 mt-4 w-full px-2 bg-black rounded-md'></div>
          <TextLines />
        </ul>
      </div>
    </div>
  );
};
