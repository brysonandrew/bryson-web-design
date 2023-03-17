import { Dot } from "./Dot";
import { Block } from "./block/Blocks";
import { useContext } from "./state/Context";

export const DotMap = () => {
  const { items } = useContext();
  return (
    <>
      {new Array(6).fill(0).map((_, index) => (
        <Block
          key={index}
          factor={1 / items.length / 2}
          index={index}
        >
          <Dot />
        </Block>
      ))}
    </>
  );
};
