import { Fragment, type FC } from 'react';
import { TItem } from '@t/projects';
import { TagLink } from './TagLink';
import styled from '@emotion/styled';

const Root = styled.div``;
const List = styled.ul``;
const Item = styled.li``;

type TProps = Required<Pick<TItem, 'slug' | 'tags'>>;
export const Tags: FC<TProps> = ({ slug, tags }) => {
  return (
    <Root className='relative'>
      <List className='row-wrap gap-2'>
        {tags.map((item, index) => {
          const { title, href } = item;
          const content = (
            <code
              style={{ fontWeight: 700 }}
              className='text-gray bg-baby-blue px-2 py-1 rounded-sm whitespace-nowrap'
            >
              {title}
            </code>
          );
          return (
            <Fragment key={`title-${title}`}>
              {/* {index !== 0 && <li className='px-1 py-1' />} */}
              <Item
                onPointerDown={(e) => e.stopPropagation()}
              >
                {typeof href === 'string' ? (
                  <TagLink
                    slug={slug}
                    href={href}
                    {...item}
                  >
                    {content}
                  </TagLink>
                ) : (
                  <>{content}</>
                )}
              </Item>
            </Fragment>
          );
        })}
      </List>
    </Root>
  );
};
