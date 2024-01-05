import { Item } from '@components/buttons/focus/Item';
import { Circle } from '@components/decoration/Circle';
import { useCursor } from '@context/cursor';
import { FOUNDATION } from '../config';
import { TickList } from '../TickList';

export const Foundation = () => {
  const {
    hoverKeyParts: [_, first],
  } = useCursor();
  return (
    <TickList
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
