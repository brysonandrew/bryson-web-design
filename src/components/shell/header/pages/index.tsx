import { Fragment } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import clsx from 'clsx';
import { Item as _Item } from './Item';
import {
  PAGE_NAV_VALUES,
  PAGE_RECORD,
  PAGE_VALUES,
} from '@app/routes/constants/pages';
import { useCoinDropSound } from '@lib/hooks/sounds/useCoinDropSound';
import { ThickLine } from '@lib/components/layout/line/ThickLine';
import { Link } from 'react-router-dom';
import { I } from '@lib/icons/icon';

const Root = styled.nav``;
const List = styled.ul``;
const Item = styled(motion.li)``;

export const Pages = () => {
  const { pathname } = useLocation();
  const coinDropSound = useCoinDropSound();
  const handleClick = () => {
    coinDropSound.play();
  };
  const isHome = pathname === PAGE_RECORD.index.path;
  return (
    <Root className='relative'>
      <Link
        className='absolute -top-1.5 right-full h-8 w-8 mr-2'
        to={PAGE_RECORD.index.path}
      >
        <I
          classValue={clsx(
            'absolute left-1 top-1 h-6 w-6 mr-2 ',
            isHome && '9',
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
      <List className='relative column-end h-full pt-0 pr-1 gap-2 md:(row pr-0 gap-0.5)'>
        {PAGE_NAV_VALUES.map(
          ({ key, title, path }, index) => {
            const isActive = pathname === path;

            return (
              <Fragment key={key}>
                <Item
                  className={clsx('relative px-1', [
                    isActive ? 'z-10' : 'z-0',
                  ])}
                  whileHover={isActive ? 'active' : 'hover'}
                >
                  <_Item
                    to={path}
                    isActive={isActive}
                    onClick={handleClick}
                  >
                    {title}
                  </_Item>
                </Item>
              </Fragment>
            );
          },
        )}
      </List>
    </Root>
  );
};
