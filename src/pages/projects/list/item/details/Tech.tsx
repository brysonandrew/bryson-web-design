import { Fragment, type FC } from 'react';
import { Space2 } from '@components/spaces/Space2';
import { TItem } from '@t/projects';

type TProps = Required<Pick<TItem, 'tags'>>;
export const Tech: FC<TProps> = ({ tags }) => {
  return (
    <div className='relative row'>
      <h4 className='text-xl'>Tech</h4>
      <Space2 />
      <ul className='column-end sm:row w-full flex-wrap'>
        {tags.map((tag, index) => {
          return (
            <Fragment key={`index-${index}`}>
              {index !== 0 && <li className='px-1 py-1 sm:py-6' />}
              <li className='background-color-3 px-2 py-1 rounded-sm'>
                <code className='text-md text-color-4 whitespace-nowrap'>
                  {tag}
                </code>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};
