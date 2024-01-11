import { P1 } from '@components/layout/space/P1';
import { P2 } from '@components/layout/space/P2';
import { TOTAL_YEARLY } from '../../config';
import { Money } from '../../Money';
import { Underline } from '../../Underline';
import { List } from './List';

export const Yearly = () => {
  return (
    <div className='column-start items-stretch gap-4 relative text-g-bb p-4 rounded-md glow'>
      <b className='uppercase '>
        Yearly cost breakdown
      </b>
      <P2 />
      <List />
      <P2 />
      <div>
        <div className='row-space w-full text-g-bb'>
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
