import { Fragment, type FC } from 'react';
import { Space } from '@components/spaces/Space';
import { TItem } from '@t/projects';

type TProps = Required<Pick<TItem, 'tags'>>;
export const Tech: FC<TProps> = ({ tags }) => {
  return (
    <div className='row'>
      <h4>Tech</h4>
      <Space />
      <ul className='column-end md:row w-full flex-wrap'>
        {tags.map((tag, index) => {
          return (
            <Fragment key={`index-${index}`}>
              {index !== 0 && <li className='px-1 py-6' />}
              <li>
                <code className='px-2 py-1 background-color-3 text-color-4 rounded-sm whitespace-nowrap'>
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
