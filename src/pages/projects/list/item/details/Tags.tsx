import { Fragment, type FC } from 'react';
import { Space3 } from '@components/spaces/Space3';
import { TItem } from '@t/projects';
import { TagLink } from './TagLink';

type TProps = Required<Pick<TItem, 'slug' | 'tags'>>;
export const Tags: FC<TProps> = ({ slug, tags }) => {
  return (
    <div className='relative row'>
      <h4 className='text-xl'>Tech</h4>
      <Space3 />
      <ul className='column-end sm:row w-full flex-wrap'>
        {tags.map((item, index) => {
          const { title, href } = item;
          const content = (
            <code className='flex text-md text-color-4 background-color-3 px-2 py-1 rounded-sm whitespace-nowrap'>
              {title}
            </code>
          );
          return (
            <Fragment key={`title-${title}`}>
              {index !== 0 && (
                <li className='px-1 py-1 sm:py-6' />
              )}
              <li
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
              </li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};
