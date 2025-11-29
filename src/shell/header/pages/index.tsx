import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import { Item } from '../Item';
import { useCoinDropSound } from '@brysonandrew/sounds/useCoinDropSound';
import { useMemo } from 'react';
import { Home } from './Home';
import { TPageLinks, TPageLinkRecord } from './config';
import { List } from './List';
import { PAGE_RECORDS } from '@app/routes';

const Root = styled.nav``;

export const Pages = () => {
  const { pathname } = useLocation();
  const coinDropSound = useCoinDropSound();
  const handleClick = () => {
    coinDropSound.play();
  };
  const navItems = useMemo<TPageLinks>(() => {
    const pageNavRecord = {
      ...PAGE_RECORDS.record,
    } as TPageLinkRecord;
    pageNavRecord.index.Component = Home;
    return Object.values(pageNavRecord);
  }, []);

  return (
    <Root className="text-right">
      <List>
        {navItems.map(({ key, title, path, Component }) => {
          const isActive = pathname === path;
          return (
            <Item
              key={key}
              to={path}
              title={title}
              isActive={isActive}
              layoutId="PAGE_ACTIVE_UNDERLINE_KEY"
              onClick={handleClick}
            >
              {Component && (
                <Component isActive={isActive} />
              )}
            </Item>
          );
        })}
      </List>
    </Root>
  );
};
