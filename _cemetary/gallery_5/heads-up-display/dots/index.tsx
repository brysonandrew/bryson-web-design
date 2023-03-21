import { Block } from "../../block";
import { useContext } from "../../state/Context";
import { Dot } from "./Dot";

export const Dots = () => {
  const { count } = useContext();
  return (
    <>
      {[...new Array(count)].map((_, index) => (
        <Block
          key={index}
          factor={1 / count / 2}
          index={index}
        >
          <Dot index={index} />
        </Block>
      ))}
    </>
  );
};
