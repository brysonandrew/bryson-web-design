import { type FC } from 'react';
import { TItem } from '@pages/projects/config/types';
import { TagLink } from './TagLink';
import styled from '@emotion/styled';
import { Brighten } from '@components/filter-animate/Brighten';

const Root = styled.div``;
const List = styled.ul``;
const Item = styled.li``;

type TProps = Required<Pick<TItem, 'slug' | 'tags'>>;
export const Tags: FC<TProps> = ({ slug, tags }) => {
  return (
    <Root className='relative'>
      <List className='row-wrap gap-2'>
        {tags.map((item) => {
          const { title, href } = item;
          const content = (
            <Brighten>
              <span
                className='text-gray bg-baby-blue px-2 py-1 rounded-sm whitespace-nowrap'
              >
                {title}
              </span>
            </Brighten>
          );
          return (
            <Item key={title} className='relative'>
              {typeof href === 'string' ? (
                <TagLink slug={slug} href={href} {...item}>
                  {content}
                </TagLink>
              ) : (
                <>{content}</>
              )}
            </Item>
          );
        })}
      </List>
    </Root>
  );
};
