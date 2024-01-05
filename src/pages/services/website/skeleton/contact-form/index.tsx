import { TextLines } from '../../../../../components/skeleton/TextLines';
import { Shell } from './Shell';

export const ContactForm = () => {
  return (
    <Shell>
      <div className='row-space gap-4 w-full'>
        <div className='w-1/4 h-full'>
          <TextLines classValue='bg-main-inverted' count={3} />
        </div>
        <div className='column gap-2 w-2/3'>
          <TextLines classValue='bg-main-inverted' count={2} />
          <TextLines
            classValue='bg-main-inverted'
            count={1}
            height='h-12'
          />
        </div>
      </div>
      <TextLines
        classValue='bg-main-inverted'
        count={1}
        height='h-4'
      />
    </Shell>
  );
};
