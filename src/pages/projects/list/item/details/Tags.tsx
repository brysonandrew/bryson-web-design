import { type FC } from 'react';
import { TItem } from '@t/projects';
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
              <code
                style={{ fontWeight: 700 }}
                className='text-gray bg-baby-blue px-2 py-1 rounded-sm whitespace-nowrap'
              >
                {title}
              </code>
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
