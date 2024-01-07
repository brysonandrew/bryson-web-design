import { P1_5 } from '@components/space/P1_5';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { End } from './End';
import {
  Price,
  TDiscount,
  TProps as TPriceProps,
} from './price';
import { P_25 } from '@components/space/P_25';
import { P4 } from '@components/space/P4';
import { Link } from 'react-router-dom';
import { I } from '@components/Icon';
import { CONTACT_ROUTE } from '@constants/routes';
import { motion } from 'framer-motion';
import { useContact } from '@context/domains/contact';
import { TPackageTitle } from '../config';

export type TProps = TPriceProps &
  PropsWithChildren<{
    title: TPackageTitle;
    discount?: TDiscount;
    color?: `bg-${Lowercase<TPackageTitle>}`;
  }>;
export const Package: FC<TProps> = ({
  title,
  children,
  color = `bg-${title.toLowerCase()}`,
  ...priceProps
}) => {
  const { onForm } = useContact();
  const handleClick = () => {
    onForm({
      message: `Hi Andrew,\nI am writing in regard to the ${title} website package.\nPlease contact me via email as soon as possible to we can discuss further.\nKind regards`,
    });
  };
  return (
    <Link
      to={CONTACT_ROUTE}
      className='relative grow w-full'
      onClick={handleClick}
    >
      <div
        className={clsx(
          'absolute -inset-0.5 rounded-md',
          color,
        )}
      />
      <motion.div
        whileHover='hover'
        className={clsx(
          'relative column items-stretch grow w-full h-full text-base',
        )}
      >
        <P1_5 />
        <End>
          <h4 className='w-full text-main-inverted text-center capitalize text-2xl tracking-wider'>
            {title}
          </h4>
          <motion.div
            initial={false}
            style={{ opacity: 0.5 }}
            variants={{ hover: { opacity: 1 } }}
          >
            <I
              classValue='absolute top-1/2 -translate-y-1/2 right-4 h-7 w-7 text-main-inverted'
              icon='fluent-mdl2:feedback-request-solid'
            />
          </motion.div>
        </End>
        <P1_5 />
        <div className='relative items-stretch h-full bg-main rounded-t-md'>
          <P4 />
          <div className='px-4'>{children}</div>
          <P4 />
        </div>
        <P_25 />
        <div className='relative bg-main rounded-b-md'>
          <End>
            <Price {...priceProps} />
          </End>
        </div>
      </motion.div>
    </Link>
  );
};
