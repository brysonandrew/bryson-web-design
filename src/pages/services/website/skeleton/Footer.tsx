import { FOOTER } from '../config';
import { Focus } from '../Focus';
import { TextLines } from './parts/TextLines';

export const Footer = () => {
  return (
    <footer className='relative row gap-4 w-full h-16 px-8 bg-black rounded-md'>
      <Focus>{FOOTER}</Focus>
      <div className='row-start-space w-full'>
        <div className='w-1/6'>
          <TextLines classValue='text-white' count={1} />
        </div>
        <div className='w-1/6'>
          <TextLines
            classValue='text-white'
            height='h-1'
            gap='gap-1'
            count={4}
          />
        </div>
      </div>
    </footer>
  );
};
