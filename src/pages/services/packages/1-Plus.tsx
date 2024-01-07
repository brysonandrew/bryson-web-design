import { I } from '@components/Icon';
import { P1 } from '@components/space/P1';
import { P1_5 } from '@components/space/P1_5';
import { P2 } from '@components/space/P2';
import { TickList } from '@components/text/TickList';
import { TICK_CIRCLE_ICON } from '@constants/icons';
import { PLUS_ICON } from '@constants/icons/text';
import { Package } from '../layout/Package';
import { resolveCopyArray } from './resolveCopyArray';

const [title, price, ...items] = resolveCopyArray(`
Plus
1399
Custom design and animations
4 x content sections
Contact form
`);
const discount = {
  value: 200,
  expiry: new Date(2024, 0, 31),
};

export const Plus = () => {
  return (
    <Package
      title={title}
      price={price}
      discount={discount}
    >
      <div className='relative row-start gap-2 w-full leading-7 py-0.5'>
        <span className='hidden lg:block absolute top-4 right-full h-px w-12 -mr-0.5 bg-blue' />
        <I
          icon={TICK_CIRCLE_ICON}
          className='w-5 h-5 mt-1 shrink-0 text-blue'
        />{' '}
        <p className='leading-7'>
          Everything included in the{' '}
          <span className='inline-flex relative px-1.5 text-main-inverted'>
            <span className='absolute inset-0.5 bg-blue' />
            <span className='relative'>Standard</span>
          </span>{' '}
          package
        </p>
      </div>
      <P1 />
      <div className='center'>
        <I
          className='shrink-0 w-5.5 h-5.5 text-green'
          icon={PLUS_ICON}
        />
      </div>
      <P1_5 />
      <TickList items={items} color='text-green' />
    </Package>
  );
};
