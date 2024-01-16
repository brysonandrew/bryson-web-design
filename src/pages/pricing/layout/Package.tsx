import { P1_5 } from '@lib/components/layout/space/P1_5';
import clsx from 'clsx';
import { FC } from 'react';
import { End } from './End';
import { Price, TProps as TPriceProps } from './price';
import { P_25 } from '@lib/components/layout/space/P_25';
import { P4 } from '@lib/components/layout/space/P4';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContact } from '@lib/contact/context';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { CUSTOM_CURSOR_KEY } from '@lib/cursor/switch/config';
import { resolvePackageConfig } from '@pages/pricing/config/constants';
import {
  TPricingKey,
  TPricingTitle,
} from '@pages/pricing/config/types';
import { TickList } from '@lib/components/layout/lists/TickList';
import { PAGE_RECORD } from '@app/routes/constants/pages';
import {
  EMAIL_ICON,
  FEEDBACK_ICON,
} from '@lib/constants/icons/constants/contact';
import { I } from '@lib/icons/icon';
import { useApp } from '@lib/context/app/useApp';

export type TProps = Pick<TPriceProps, 'discount'> & {
  title: TPricingTitle;
  backgroundColorClass: `bg-${TPricingKey} gradient-${TPricingKey}`;
  textColorClass: `text-${TPricingKey}`;
};
export const Package: FC<TProps> = ({ title }) => {
  const config = resolvePackageConfig(title);
  const { key, listItems, price, discount, PreContent } =
    config;
  const { COLOR, Glow, BORDER_RADIUS, GRADIENT, Texture } =
    useApp();
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
            'px-1 mx-1 pricing-title',
            GRADIENT[key],
          )}
          style={{
            backgroundColor: COLOR[key],
            backgroundImage: GRADIENT[key],
          }}
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
      <Glow
        color={COLOR[key]}
        box={4}
        drop={4}
        animate={{ opacity: isHover ? 1 : 0.5 }}
      >
        <div
          className={clsx(
            'absolute -inset-0.5',
            GRADIENT[key],
          )}
          style={{
            backgroundColor: COLOR[key],
            backgroundImage: GRADIENT[key],
            borderRadius: BORDER_RADIUS.MD,
          }}
        />
      </Glow>
      <motion.div
        className={clsx(
          'relative column-stretch grow w-full h-full text-base',
        )}
        {...handlers}
      >
        <P1_5 />
        <End classValue='pricing-title'>
          <h4 className='w-full text-center text-2xl'>
            {title}
          </h4>
          <motion.div
            initial={false}
            animate={{ opacity: isHover ? 1 : 0.5 }}
          >
            <I
              classValue='absolute top-1/2 -translate-y-1/2 right-4 h-7 w-7 text-current'
              icon={FEEDBACK_ICON}
            />
          </motion.div>
        </End>
        <P1_5 />
        <div
          className='column-stretch relative h-full bg-main'
          style={{
            borderTopLeftRadius: BORDER_RADIUS.MD,
            borderTopRightRadius: BORDER_RADIUS.MD,
          }}
        >
          <Texture />
          <P4 />
          <div
            className='relative px-4'
            style={{
              color: COLOR[key],
            }}
          >
            {PreContent && <PreContent />}
            <TickList items={listItems} />
          </div>
          <P4 />
        </div>
        <P_25 />
        <div
          className='relative bg-main'
          style={{
            borderBottomLeftRadius: BORDER_RADIUS.MD,
            borderBottomRightRadius: BORDER_RADIUS.MD,
          }}
        >
          <Texture />
          <End>
            <Price price={price} discount={discount} />
          </End>
        </div>
      </motion.div>
    </Link>
  );
};
