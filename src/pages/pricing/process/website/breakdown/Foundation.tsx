import { Item } from '@pages/pricing/process/focus/Item';
import { Circle } from '@pages/pricing/process/focus/Circle';
import { useCursor } from '@brysonandrew/cursor/context';
import { FOUNDATION } from '../config';
import { List } from '@brysonandrew/base/components/layout/lists/List';

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
