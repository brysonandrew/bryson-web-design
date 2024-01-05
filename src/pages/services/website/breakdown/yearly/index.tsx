import { P1 } from '@components/space/P1';
import { P2 } from '@components/space/P2';
import { TOTAL_YEARLY } from '../../config';
import { Money } from '../../Money';
import { Underline } from '../../Underline';
import { List } from './List';

export const Yearly = () => {
  return (
    <div className='column-start items-stretch gap-4 relative text-color-1 p-4 rounded-md glow-interactive'>
      <b className='uppercase font-display'>
        Yearly cost breakdown
      </b>
      <P2 />
      <List />
      <P2 />
      <div>
        <div className='row-space w-full text-color-1'>
          <b className='uppercase font-display'>
            Projected total per year
          </b>
          <Money prefix={<Underline isDouble />}>
            {TOTAL_YEARLY}
          </Money>
        </div>
        <div className='relative w-full'>
          <Underline
            height='h-px'
            isDouble
            color='bg-gray'
          />
        </div>
      </div>
      <P1 />
    </div>
  );
};
