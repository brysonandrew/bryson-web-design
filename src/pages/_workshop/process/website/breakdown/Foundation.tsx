import { Item } from '@pages/_workshop/process/focus/Item';
import { Circle } from '@pages/_workshop/process/focus/Circle';
import { useCursor } from '@lib/cursor/context';
import { FOUNDATION } from '../config';
import { List } from '../../../../../../lib/components/layout/lists/List';

export const Foundation = () => {
  const {
    hoverKeyParts: [_, first],
  } = useCursor();
  return (
    <List
      items={FOUNDATION.map((item, index) => {
        return {
          key: item,
          children: (
            <Item id={item}>
              <Circle isActive={first === item}>
                <>{index + 1}</>
              </Circle>
              {item}
            </Item>
          ),
        };
      })}
    />
  );
};
