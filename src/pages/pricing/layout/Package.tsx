import { P1_5 } from '@lib/components/layout/space/P1_5';
import clsx from 'clsx';
import { FC } from 'react';
import { End } from './End';
import { Price, TProps as TPriceProps } from './price';
import { P_25 } from '@lib/components/layout/space/P_25';
import { P4 } from '@lib/components/layout/space/P4';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContact } from '@pages/index/contact/context';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { CUSTOM_CURSOR_KEY } from '@lib/cursor/switch/config';
import { resolvePackageConfig } from '@pages/pricing/config/constants';
import {
  TPricingKey,
  TPricingTitle,
} from '@pages/pricing/config/types';
import { TickList } from '@lib/components/layout/lists/TickList';
import { PAGE_RECORD } from '@app/routes/constants/pages';
import { Metal } from '@components/decoration/metal';
import { EMAIL_ICON } from '@lib/constants/icons/constants/contact';
import { I } from '@lib/icons/icon';

export type TProps = Pick<TPriceProps, 'discount'> & {
  title: TPricingTitle;
  backgroundColorClass: `bg-${TPricingKey} gradient-${TPricingKey}`;
  textColorClass: `text-${TPricingKey}`;
};
export const Package: FC<TProps> = ({
  title,
  backgroundColorClass,
  textColorClass,
}) => {
  const config = resolvePackageConfig(title);
  const { listItems, price, discount, PreContent } = config;
  const { onForm } = useContact();
  const { isHover, handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    title,
    EMAIL_ICON,
    <>
      Inquire about the
      {
        <span
          className={clsx(
            'px-1 mx-1 text-main-inverted',
            backgroundColorClass,
          )}
          // style={{
          //   backgroundColor: `var(--${title?.toLowerCase()})`,
          // }}
        >
          {title}
        </span>
      }
      package
    </>,
  );
  const handleClick = () => {
    onForm({
      message: `I am writing in regard to the ${title} website package.\nPlease contact me via email as soon as possible to we can discuss further.\nKind regards`,
    });
    handlers.onHoverEnd();
    window.scrollTo(0, 0);
  };
  return (
    <Link
      to={PAGE_RECORD.contact.path}
      className='relative grow w-full'
      onClick={handleClick}
    >
      <div
        className={clsx(
          'absolute -inset-0.5 rounded-md',
          backgroundColorClass,
        )}
      />
      <motion.div
        className={clsx(
          'relative column-stretch grow w-full h-full text-base',
        )}
        {...handlers}
      >
        <P1_5 />
        <End classValue='text-black-9'>
          <h4 className='w-full text-center text-2xl tracking-wider font-semibold capitalize'>
            {title}
          </h4>
          <motion.div
            initial={false}
            animate={{ opacity: isHover ? 1 : 0.5 }}
          >
            <I
              classValue='absolute top-1/2 -translate-y-1/2 right-4 h-7 w-7 text-current'
              icon='fluent-mdl2:feedback-request-solid'
            />
          </motion.div>
        </End>
        <P1_5 />
        <div className='column-stretch relative h-full bg-main rounded-t-md'>
          <Metal classValue={clsx('rounded-md')} />
          <P4 />
          <div
            className={clsx(
              'relative px-4',
              textColorClass,
            )}
          >
            {PreContent && <PreContent />}
            <TickList items={listItems} />
          </div>
          <P4 />
        </div>
        <P_25 />
        <div className='relative bg-main rounded-b-md'>
          <Metal classValue={clsx('rounded-md')} />
          <End>
            <Price price={price} discount={discount} />
          </End>
        </div>
      </motion.div>
    </Link>
  );
};
