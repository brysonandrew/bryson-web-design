import type { FC } from 'react';
import { KEYWORDS_AND_PHRASES_UNIQUE } from 'lib/copy/items';
import { useWorkState } from '@pages/_dev/work/context';
import { WorkItemBox } from '@pages/_dev/work/item/box';

export const WorkKeywords: FC = () => {
  const { onKeywordClick, keyRecord, q } = useWorkState();
  const isKeyDown = keyRecord.alt || keyRecord.shift;
  return (
    <div className="row-wrap gap-1">
      {KEYWORDS_AND_PHRASES_UNIQUE.map((value) => {
        return (
          <button
            key={value}
            className="relative"
            title={`Add ${value} to query.`}
            onClick={() => onKeywordClick(value)}
          >
            <WorkItemBox
              isActive={q.includes(value)}
              background={{
                classValue: isKeyDown
                  ? 'opacity-40'
                  : 'opacity-10',
              }}
            >
              <span className="whitespace-nowrap">
                {value}
              </span>
            </WorkItemBox>
          </button>
        );
      })}
    </div>
  );
};
