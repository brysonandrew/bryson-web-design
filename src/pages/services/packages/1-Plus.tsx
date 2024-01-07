import { I } from '@components/Icon';
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

export const Plus = () => { 
  return (
    <Package
      title={title}
      price={price}
      discount={{
        value: 200,
        expiry: new Date(2024, 0, 31),
      }}
    >
      <div className='relative row-start gap-2 w-full leading-7 py-0.5'>
        <I
          icon={TICK_CIRCLE_ICON}
          className='w-5 h-5 mt-1 shrink-0 text-green'
        />{' '}
        <p className='leading-7'>
          Everything included in the{' '}
          <span className='inline-flex relative px-1.5 text-main-inverted'>
            <span className='absolute inset-0.5 bg-blue' />
            <span className='hidden lg:block absolute top-1/2 right-full h-px w-19 -mr-0.5 bg-blue' />
            <span className='relative'>Standard</span>
          </span>{' '}
          package
        </p>
      </div>
      <P2 />
      <div className='center'>
        <div className='center shrink-0 w-7 h-7 rounded-full text-current'>
          <I
            className='shrink-0 w-5.5 h-5.5'
            icon={PLUS_ICON}
          />
        </div>
      </div>
      <P2 />
      <TickList items={items} color='text-green' />
    </Package>
  );
};
