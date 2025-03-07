import {
  formatNZLongDate,
  nToMoney,
} from '@brysonandrew/utils-format';
import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { Banner } from './Banner';
import { Cost } from './Cost';
import { SubSubText } from './SubSubText';
import { Subtext } from './Subtext';

export type TDiscount = {
  value: number;
  expiry: Date;
};

export type TPriceProps = {
  price: number | string;
  discount?: TDiscount;
};
export const Price: FC<TPriceProps> = ({ price, discount }) => {
  const isText =
    typeof price === 'string' && isNaN(Number(price));

  if (isText) {
    const [title, subtitle] = price.split(':');
    return (
      <div className='relative column gap-0.5'>
        <Cost>{title}</Cost>
        <Subtext classValue='text-b2-w9'>
          {subtitle}
        </Subtext>
      </div>
    );
  }
  const nPrice = Number(price);
  const textPrice = `${nToMoney(nPrice)}`;

  if (typeof discount !== 'undefined') {
    const { value, expiry } = discount;
    const now = Date.now();
    const expiryMs = expiry.getTime();
    const isExpired = now > expiryMs;
    const discountedPrice = nPrice - value;
    const dateStr = formatNZLongDate(expiry);
    return (
      <div className='column'>
        {!isExpired && (
          <Banner>
            <span className='font-sans text-3xl'>
              -{nToMoney(value)}
            </span>
            <div className='column'>
              <SubSubText>only until</SubSubText>
              <Subtext>{dateStr}</Subtext>
            </div>
          </Banner>
        )}
        <div className='relative row gap-2'>
          <Cost
            classValue={cx(!isExpired && 'line-through')}
          >
            {textPrice}
          </Cost>
          {!isExpired && (
            <Cost>{nToMoney(discountedPrice)}</Cost>
          )}
        </div>
      </div>
    );
  }

  return <Cost>{textPrice}</Cost>;
};
