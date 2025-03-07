import { Item } from '@pages/pricing/process/focus/Item';
import { Circle } from '@pages/pricing/process/focus/Circle';
import { useCursor } from '@brysonandrew/motion-cursor';
import { List } from '@brysonandrew/layout-lists/List';
import { FOUNDATION } from '@pages/pricing/process/website/config';

export const Foundation = () => {
  const {
    hoverParts: [_, first],
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
