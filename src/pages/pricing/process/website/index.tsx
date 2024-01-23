import { P1 } from '@brysonandrew/space/P1';
import { P2 } from '@brysonandrew/space/P2';
import { Extras } from './breakdown/extras';
import { Money } from './Money';
import { Skeleton } from './skeleton';
import { Underline } from './Underline';
import { useExtrasCost } from './useExtrasCost';
import { Foundation } from './breakdown/Foundation';
import { FOUNDATION_COST } from './config';

export const Website = () => {
  const extrasCost = useExtrasCost();
  return (
    <div className='column-start gap-16 h-full w-full '>
      <p className='text-left'>
        A versitile single page website package. Use the
        breakdown below to sharpen your vision. When you
        it's time to get started please get in touch.
      </p>
      <div className='column gap-1 lg:gap-8 md:row-start h-full w-full'>
        <div className='column-start-stretch gap-1 lg:gap-4 w-full md:w-1/2 h-full'>
          <div className='column-start-stretch gap-4 relative p-4'>
            <b className='uppercase'>features breakdown</b>
            <P2 />
            <span className='uppercase '>core</span>
            <P2 />
            <Foundation />
            <P2 />
            <span className='uppercase '>optional</span>
            <P2 />
            <Extras />
            <div>
              <div className='row-space w-full '>
                <span className='uppercase '></span>
                <Money prefix={<Underline />}>
                  {extrasCost}
                </Money>
              </div>
              <div className='relative w-full'>
                <Underline height='h-px' color='bg-gray' />
              </div>
            </div>
            <P2 />
            <div>
              <div className='row-space w-full '>
                <b className='uppercase '>Total</b>
                <Money prefix={<Underline isDouble />}>
                  {FOUNDATION_COST + extrasCost}
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
          <P2 />
        </div>
        <div className='grow w-full md:(w-1/2) h-full'>
          <Skeleton />
        </div>
      </div>
    </div>
  );
};
