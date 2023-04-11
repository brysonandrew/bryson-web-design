import styled from "@emotion/styled";
import { useMothContext } from "@moth-state/Context";
import { motion } from "framer-motion";
import { Inventory } from "./Inventory";
import { useState } from "react";
import clsx from "clsx";
import { BUTTON_PADDING } from "@moth-constants/styles";
import type { TShopKey } from "@moth-state/types";
import { useSpeech } from "@moth-components/speech/useSpeech";
import { pascalToTitle } from "@utils/format";
import { SHOP_KEYS } from "@moth-state/constants";

const Root = styled(motion.div)``;
const Items = styled.ul``;
const Item = styled.li``;
const Button = styled(motion.button)``;

export const Options = () => {
  const { shop, dispatch } = useMothContext();
  const [selected, setSelected] = useState<TShopKey | null>(
    SHOP_KEYS[0],
  );
  const isSelected = Boolean(selected);
  const speech = useSpeech({ text: "ayo" });

  const buttonProps = {
    className: clsx(BUTTON_PADDING, [
      !isSelected && "cursor-not-allowed",
    ]),
    animate: { opacity: isSelected ? 1 : 0.4 },
  };

  const handleSell = () => {
    if (selected !== null) {
      dispatch({ type: "sell", value: selected });
      speech.play(`${pascalToTitle(selected)} sold`);
    }
  };

  const handlePurchase = () => {
    if (selected !== null) {
      dispatch({ type: "purchase", value: selected });
      speech.play(`${pascalToTitle(selected)} purchased`);
    }
  };

  return (
    <Root
      key="Options"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Inventory
        title="Shop"
        record={shop}
        selected={selected}
        onSelect={(key) => {
          setSelected(key);
        }}
      />
      <div className="py-1" />
      <div className="h-px bg-teal-04 w-full" />
      <div className="py-1" />
      <Items className="flex items-center">
        <Item>
          <Button
            {...buttonProps}
            onTap={() => {
              handleSell();
            }}
          >
            Sell
          </Button>
        </Item>
        <Item className="p-1" />
        <Item>
          <Button
            {...buttonProps}
            onTap={() => {
              handlePurchase();
            }}
          >
            Purchase
          </Button>
        </Item>
      </Items>
    </Root>
  );
};
