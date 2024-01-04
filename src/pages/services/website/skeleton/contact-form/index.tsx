import { TextLines } from '../parts/TextLines';
import { Shell } from './Shell';

export const ContactForm = () => {
  return (
    <Shell>
      <div className='row-space gap-4 w-full'>
        <div className='w-1/4 h-full'>
          <TextLines classValue='text-white' count={3} />
        </div>
        <div className='column gap-2 w-2/3'>
          <TextLines classValue='text-white' count={2} />
          <TextLines
            classValue='text-white'
            count={1}
            height='h-12'
          />
        </div>
      </div>
      <TextLines
        classValue='text-white'
        count={1}
        height='h-4'
      />
    </Shell>
  );
};
