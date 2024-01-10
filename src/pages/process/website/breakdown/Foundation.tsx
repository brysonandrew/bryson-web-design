import { Item } from '@components/interactive/focus/Item';
import { Circle } from '@components/decoration/Circle';
import { useCursor } from '@context/cursor';
import { FOUNDATION } from '../config';
import { List } from '../../../../components/text/List';

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
