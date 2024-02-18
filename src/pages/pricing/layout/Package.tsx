import clsx from 'clsx';
import { FC } from 'react';
import { End } from './End';
import { Price, TPriceProps } from './price';
import { P_25 } from '@brysonandrew/space/P_25';
import { P4 } from '@brysonandrew/space/P4';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContact } from '@brysonandrew/contact';
import { useHoverKey } from '@brysonandrew/cursor';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { resolvePackageConfig } from '@pages/pricing/config/constants';
import { TPricingTitle } from '@pages/pricing/config/types';
import { TickList } from '@brysonandrew/layout-lists/TickList';
import { EMAIL_ICON } from '@brysonandrew/icons-keys/contact';
import { useApp } from '@brysonandrew/app';
import { Cursor } from './Cursor';
import { TStyle } from '@app/style';
import { PAGE_RECORD } from '@app/routes';
import { FadeDownPair } from '@brysonandrew/fade-edge/pairs/FadeDownPair';

export type TPackageProps = Pick<
  TPriceProps,
  'discount'
> & {
  title: TPricingTitle;
};
export const Package: FC<TPackageProps> = ({ title }) => {
  const config = resolvePackageConfig(title);
  const {
    key,
    listItems,
    price,
    discount,
    PreContent,
    classValue,
  } = config;
  const { COLOR, LIGHT, BORDER_RADIUS, BackFillMotion } =
    useApp<TStyle>();
  const { onForm } = useContact();
  const { isHover, handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    title,
    EMAIL_ICON,
    <Cursor
      title={title}
      classValue={classValue}
      style={{
        backgroundColor: COLOR[key],
      }}
    />,
  );
  const handleClick = () => {
    onForm({
      message: `I am writing in regard to the ${title} website package.\nPlease contact me via email as soon as possible to we can discuss further.\nKind regards`,
    });
    handlers.onMouseLeave();
    window.scrollTo(0, 0);
  };
  return (
    <Link
      to={PAGE_RECORD.contact.path}
      className='relative grow w-full'
      onClick={handleClick}
    >
      {LIGHT && (
        <LIGHT.Back
          color={COLOR[key]}
          box={4}
          drop={4}
          animate={{ opacity: isHover ? 1 : 0.5 }}
        >
          <div
            className={clsx(
              'absolute -inset-0.5',
              classValue,
            )}
            style={{
              backgroundColor: COLOR[key],
              borderRadius: BORDER_RADIUS.MD,
            }}
          />
        </LIGHT.Back>
      )}
      <motion.div
        className={clsx(
          'relative column-stretch grow w-full h-full text-base',
        )}
        {...handlers}
      >
        <End classValue='title-pricing'>
          <FadeDownPair
            classValue='h-full'
            darkClass='opacity-dark'
            lightClass='opacity-light'
            darkColor='var(--black-02)'
            lightColor='var(--white-02)'
          />
          <h4 className='relative w-full text-center text-2xl z-10'>
            {title}
          </h4>
        </End>
        <P_25 />
        <div
          className='column-stretch relative h-full bg-main'
          style={{
            borderRadius: BORDER_RADIUS.MD,
          }}
        >
          <BackFillMotion />
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
          <BackFillMotion />
          <Price price={price} discount={discount} />
        </End>
      </motion.div>
    </Link>
  );
};
