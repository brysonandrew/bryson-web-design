import { Block } from "./block";
import { useContext } from "../state/Context";
import { Dot } from "./Dot";


export const DotMap = () => {
  const { count } = useContext();
  return (
    <>
      {new Array(count).fill(0).map((_, index) => (
        <Block
          key={index}
          factor={1 / count / 2}
          index={index}
        >
          <Dot />
        </Block>
      ))}
    </>
  );
};
