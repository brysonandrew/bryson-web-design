import { P1 } from '@brysonandrew/space/P1';
import { P2 } from '@brysonandrew/space/P2';
import { TOTAL_YEARLY } from '@pages/pricing/process/website/config';
import { Money } from '../../Money';
import { Underline } from '../../Underline';
import { List } from './List';

export const Yearly = () => {
  return (
    <div className='column-start-stretch gap-4 relative  p-4'>
      <b className='uppercase '>Yearly cost breakdown</b>
      <P2 />
      <List />
      <P2 />
      <div>
        <div className='row-space w-full '>
          <b className='uppercase '>
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
