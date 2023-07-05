import { Fragment } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import clsx from 'clsx';
import { Item } from './Item';
import { PAGE_LINKS } from '@constants/copy';

const toPathname = (v: string) => `/${v}`;

const Root = styled(motion.ul)``;

export const Pages = () => {
  const { pathname } = useLocation();

  return (
    <Root
      className={clsx(
        'relative flex flex-col items-end h-full pt-0 pr-1 md:flex-row md:items-center md:p-0',
      )}
    >
      {PAGE_LINKS.filter(
        (item) => pathname !== toPathname(item),
      ).map((item, index) => {
        const to = toPathname(item);
        return (
          <Fragment key={item}>
            {index !== 0 && <li className='p-2 md:p-2' />}
            <Item to={to}>{item}</Item>
          </Fragment>
        );
      })}
    </Root>
  );
};
