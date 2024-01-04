import { HEADER } from '../config';
import { Focus } from '../Focus';

export const Header = () => {
  return (
    <header className='relative row-space w-full px-8 h-12 bg-black rounded-md'>
      <Focus>{HEADER}</Focus>
      <div className='relative row gap-4'>
        <div className='h-4 w-4 bg-white' />
        <div className='column-start gap-1'>
          <div className='h-2 w-24 bg-white' />
          <div className='h-1 w-24 bg-white' />
        </div>
      </div>
      <div className='h-2 w-8 bg-white' />
    </header>
  );
};
