import { usePricing } from '@pages/index/pricing/PricingProvider';
import { Normal } from './variants/Normal';
import { Reversed } from './variants/Reversed';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { ADDITIONAL_CONTENT } from '@pages/pricing/process/website/config';

type TProps = PropsWithChildren;
export const ImageAndText: FC<TProps> = ({ children }) => {
  const { extras } = usePricing();
  const contentCount = extras[ADDITIONAL_CONTENT];
  const isContent =
    typeof contentCount === 'number' && contentCount > 0;
  const baseContent = isContent ? 0 : 1;
  const ARR = [...Array(baseContent + ~~contentCount)];
  return (
    <>
      {ARR.map((_, index) => {
        const Item = index % 2 === 0 ? Normal : Reversed;
        return (
          <div
            key={`${index}`}
            className={clsx(
              'relative w-full',
              !isContent && 'opacity-50',
            )}
          >
            <Item />
            {children}
          </div>
        );
      })}
    </>
  );
};
