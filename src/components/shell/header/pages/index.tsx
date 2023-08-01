import { Fragment } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import clsx from 'clsx';
import { Item } from './Item';
import { PAGE_LINKS } from '@constants/copy';

const toPathname = (v: string) => `/${v}`;

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Pages = () => {
  const { pathname } = useLocation();

  return (
    <Root className={clsx('relative column-end')}>
      <List
        className={clsx(
          'relative column-end h-full pt-0 pr-1 md:row md:p-0',
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
      </List>
    </Root>
  );
};
