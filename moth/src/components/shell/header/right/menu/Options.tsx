import styled from "@emotion/styled";
import { useMothContext } from "@moth-state/Context";
import { motion } from "framer-motion";
import { Controls } from "./Controls";

const Root = styled(motion.div)``;
const Items = styled.ul``;
const Item = styled.li``;
const Button = styled(motion.button)``;

export const Options = () => {
  const { controls, reset } = useMothContext();

  const options: [string, () => void][] = [["quit", reset]];

  return (
    <Root
      key="Options"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Controls
        title="Abilities"
        record={controls.abilities}
      />
      <div className="py-1" />
      <div className="h-px bg-teal-02 w-full" />
      <div className="py-1" />
      <Controls
        title="Directions"
        record={controls.direction}
      />
      <div className="py-1" />
      <div className="h-px bg-teal-02 w-full" />
      <div className="py-1" />
      <Controls
        title="Specials"
        record={controls.specials}
      />
      <div className="py-2" />
      <Items className="shadow-blue bg-black-09 p-4">
        {options.map(([name, handler]) => (
          <Item key={name}>
            <Button onTap={handler}>{name}</Button>
          </Item>
        ))}
      </Items>
    </Root>
  );
};
