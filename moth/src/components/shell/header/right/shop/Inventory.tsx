import styled from "@emotion/styled";
import type { TShopKey } from "@moth-state/types";
import { pascalToTitle } from "@utils/format";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.div)``;
const Items = styled.ul``;
const Item = styled.li``;
const Button = styled(motion.button)``;

type TRecord = Record<TShopKey, string | number>;
type TEntry = [TShopKey, string | number];
type TProps = {
  title: string;
  record: TRecord;
  selected: TShopKey | null;
  onSelect(key: TShopKey): void;
};
export const Inventory: FC<TProps> = ({
  title,
  record,
  selected,
  onSelect,
}) => {
  const entries = Object.entries(record) as TEntry[];
  return (
    <Root
      key="Inventory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h4>{title}</h4>
      <div className="py-1" />
      <Items>
        {entries.map(([key, value]: TEntry) => (
            <Item key={key} className="relative">
              {selected === key && (
                <motion.div
                  layoutId="SELECTED_INVENTORY"
                  className="absolute inset-0 shadow-teal-02"
                />
              )}
              <Button
                className="flex items-center justify-between px-2 py-1 w-full"
                onTap={() => onSelect(key)}
              >
                <h6 className="whitespace-nowrap">
                  {pascalToTitle(key)}
                </h6>
                <div className="px-2" />
                <h6>{value}</h6>
              </Button>
            </Item>
          ))}
      </Items>
    </Root>
  );
};
