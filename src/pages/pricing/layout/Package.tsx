import clsx from 'clsx';
import { FC } from 'react';
import { End } from './End';
import { Price, TProps as TPriceProps } from './price';
import { P_25 } from '@brysonandrew/space/P_25';
import { P4 } from '@brysonandrew/space/P4';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContact } from '@brysonandrew/contact';
import { useHoverKey } from '@brysonandrew/cursor';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { resolvePackageConfig } from '@pages/pricing/config/constants';
import { TPricingTitle } from '@pages/pricing/config/types';
import { TickList } from '@brysonandrew/layout/lists/TickList';
import { EMAIL_ICON } from '@brysonandrew/icons/config/constants/contact';
import { useApp } from '@brysonandrew/app';
import { Cursor } from './Cursor';
import { TStyle } from '@app/style';
import { PAGE_RECORD } from '@app/routes';
import { FadeDown } from '@brysonandrew/fade';

export type TProps = Pick<TPriceProps, 'discount'> & {
  title: TPricingTitle;
};
export const Package: FC<TProps> = ({ title }) => {
  const config = resolvePackageConfig(title);
  const { key, listItems, price, discount, PreContent } =
    config;
  const { COLOR, Glow, BORDER_RADIUS, GRADIENT, Back } =
    useApp<TStyle>();
  const { onForm } = useContact();
  const { isHover, handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    title,
    EMAIL_ICON,
    <Cursor
      title={title}
      classValue={GRADIENT[key]}
      style={{
        backgroundColor: COLOR[key],
        backgroundImage: GRADIENT[key],
      }}
    />,
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
      {Glow && (
        <Glow.Shell
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
        </Glow.Shell>
      )}
      <motion.div
        className={clsx(
          'relative column-stretch grow w-full h-full text-base',
        )}
        {...handlers}
      >
        <End classValue='title-pricing'>
          <FadeDown
            classValue='h-full'
            style={{
              opacity: 0.4,
              borderRadius: BORDER_RADIUS.MD,
            }}
          />
          <h4 className='relative w-full text-center text-2xl z-10'>
            {title}
          </h4>
          {/* <FeedbackIcon isHover={isHover} /> */}
        </End>
        <P_25 />
        <div
          className='column-stretch relative h-full bg-main'
          style={{
            borderRadius: BORDER_RADIUS.MD,
          }}
        >
          <Back />
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
        <End>
          <Back />
          <Price price={price} discount={discount} />
        </End>
      </motion.div>
    </Link>
  );
};
