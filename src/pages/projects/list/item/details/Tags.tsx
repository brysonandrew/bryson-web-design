import { type FC } from 'react';
import { TItem } from '@pages/projects/config/types';
import { TagLink } from './TagLink';
import styled from '@emotion/styled';
import { Brighten } from '@components/animation/filter-animate/Brighten';

const Root = styled.div``;

type TProps = Required<Pick<TItem, 'slug' | 'tags'>>;
export const Tags: FC<TProps> = ({ slug, tags }) => {
  return (
    <Root className='relative'>
      <ul className='row-wrap gap-2'>
        {tags.map((item) => {
          const { title, href } = item;
          const content = (
            <Brighten>
              <span
                className='text-gray bg-accent px-2 py-1 rounded-sm whitespace-nowrap'
              >
                {title}
              </span>
            </Brighten>
          );
          return (
            <li key={title} className='relative'>
              {typeof href === 'string' ? (
                <TagLink slug={slug} href={href} {...item}>
                  {content}
                </TagLink>
              ) : (
                <>{content}</>
              )}
            </li>
          );
        })}
      </ul>
    </Root>
  );
};
