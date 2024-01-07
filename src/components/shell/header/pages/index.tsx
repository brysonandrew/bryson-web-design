import { Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import clsx from 'clsx';
import { Item as _Item } from './Item';
import { PAGE_TITLES } from '@constants/copy';
import { useCoinDropSound } from '@hooks/sounds/useCoinDropSound';
import { HOME_ROUTE } from '@constants/routes';
import { ThickLine } from '@components/line/ThickLine';
import { I } from '@components/Icon';
import { Link } from 'react-router-dom';
import { DURATION } from '@constants/animation';

const toPathname = (v: string) => `/${v.toLowerCase()}`;

const Root = styled.nav``;
const List = styled.ul``;
const Item = styled(motion.li)``;

export const Pages = () => {
  const { pathname } = useLocation();
  const coinDropSound = useCoinDropSound();
  const handleClick = () => {
    coinDropSound.play();
  };
  const isHome = pathname === HOME_ROUTE;
  return (
    <Root className='relative'>
      <Link
        className='absolute -top-1.5 right-full h-8 w-8 mr-2'
        to={HOME_ROUTE}
      >
        <I
          classValue={clsx(
            'absolute left-1 top-1 h-6 w-6 mr-2 text-g-bb',
            isHome && 'text-b-w9 text-stroke-baby-blue-02',
          )}
          icon='material-symbols:home'
        />
        {isHome && (
          <ThickLine
            classValue='top-full left-3 h-2 w-2'
            layoutId='PAGE_ACTIVE_UNDERLINE_KEY'
          />
        )}
      </Link>

      <List className='relative column-end h-full pt-0 pr-1 md:row md:pr-0'>
        {PAGE_TITLES.map((item, index) => {
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
                <_Item
                  to={to}
                  isActive={isActive}
                  onClick={handleClick}
                >
                  {item}
                </_Item>
              </Item>
            </Fragment>
          );
        })}
      </List>
    </Root>
  );
};
