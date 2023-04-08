import styled from "@emotion/styled";
import { pascalToTitle } from "@utils/format";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.div)``;
const Items = styled.ul``;
const Item = styled.li``;
const Button = styled(motion.button)``;

type TRecord = Record<string, string | number>;
type TEntry = [string, string | number];
type TProps = {
  title?: string;
  // record: TRecord;
  // selected: string | null;
  // onSelect(key: string): void;
};
export const Volume: FC<TProps> = ({
  title,
  // record,
  // selected,
  // onSelect,
}) => (
  <Root
    key="Inventory"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h4>{title}</h4>
    <div className="py-1" />
     <div className="py-1" />
      <div className="h-px bg-blue w-full" />
      <div className="py-1" />
      <label>
        <input
        
        />
      </label>
    {/* <Items>
      {Object.entries(record).map(
        ([key, value]: TEntry) => (
          <Item
            key={key}
            className="relative"
          >
            {selected === key && (
              <motion.div
                layoutId="SELECTED_INVENTORY"
                className="absolute inset-0 shadow-blue"
              />
            )}
            <Button className="flex items-center justify-between px-2 py-1 w-full" onTap={() => onSelect(key)}>
              <h6 className="whitespace-nowrap">{pascalToTitle(key)}</h6>
              <div className="px-2" />
              <h6>{value}</h6>
            </Button>
          </Item>
        ),
      )}
    </Items> */}
  </Root>
);
