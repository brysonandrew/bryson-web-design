import { ThinLine } from '@lib/components/decoration/line';
import { Money } from '../Money';
import { List } from './yearly/List';

export const Financials = () => {
  return (
    <div className='w-full column-start gap-4'>
      <div className='row-space w-full text-xl'>
        <p>Total Fixed</p>
        <Money>{800}</Money>
      </div>
      <div className='column-start gap-4 w-full p-4'>
        <div className='row-space w-full'>
          <p>Base</p>
          <Money>{800}</Money>
        </div>
      </div>
      <ThinLine />
      <div className='row-space w-full text-xl'>
        <p>\ Yearly</p>
        <Money prefix='starting from '>{80}</Money>
      </div>
      <div className='column-start gap-4 w-full p-4'>
        <List />
      </div>
    </div>
  );
};
