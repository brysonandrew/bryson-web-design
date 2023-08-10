import { Fragment } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import clsx from 'clsx';
import { Item as Link } from './Item';
import { PAGE_LINKS } from '@constants/copy';
import { useCoinDropSound } from '@hooks/sounds/useCoinDropSound';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';

const toPathname = (v: string) => `/${v}`;

const Root = styled(motion.nav)``;
const List = styled(motion.ul)``;
const Item = styled(motion.li)``;

export const Pages = () => {
  const { pathname } = useLocation();
  const coinDropSound = useCoinDropSound();
  const handleClick = () => {
    coinDropSound.play();
  };
  return (
    <Root>
      <List
        className={clsx(
          'relative column-end h-full pt-0 pr-1 md:row md:pr-0',
        )}
      >
        {PAGE_LINKS.map((item, index) => {
          const to = toPathname(item);
          const isActive = pathname === to;

          return (
            <Fragment key={item}>
              {index !== 0 && (
                <Item className='p-2 md:p-0.5' />
              )}
              <Item
                className={clsx('relative px-1', [
                  isActive ? 'z-10' : 'z-0',
                ])}
                whileHover={isActive ? 'active' : 'hover'}
              >
                <Link
                  to={to}
                  isActive={isActive}
                  onClick={handleClick}
                >
                  {item}
                </Link>
              </Item>
            </Fragment>
          );
        })}
      </List>
    </Root>
  );
};
