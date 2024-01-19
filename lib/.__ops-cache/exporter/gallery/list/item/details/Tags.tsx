import { type FC } from 'react';
import { TItem } from '@brysonandrew/gallery/config/types';
import { TagLink } from './TagLink';
import styled from '@emotion/styled';
import { Brighten } from '@brysonandrew/animation/components/filter-animate/Brighten';
import { useApp } from '@brysonandrew/context/app/useApp';

const Root = styled.div``;

type TProps = Required<Pick<TItem, 'slug' | 'tags'>>;
export const Tags: FC<TProps> = ({ slug, tags }) => {
  const { BORDER_RADIUS } = useApp();
  return (
    <Root className='relative'>
      <ul className='row-wrap gap-2'>
        {tags.map((item) => {
          const { title, href } = item;
          const content = (
            <Brighten>
              <span
                className='text-black-9 bg-accent px-2 py-1 whitespace-nowrap'
                style={{ borderRadius: BORDER_RADIUS.SM }}
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
