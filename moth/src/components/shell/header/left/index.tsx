import type { TShopNumberEntry } from "@moth-components/moth/types";
import { useMothContext } from "@moth-state/Context";
import { AnimatePresence } from "framer-motion";
import { Item } from "./Item";

export const Left = () => {
  const { inventory } = useMothContext();
  const entries = Object.entries(
    inventory,
  ) as TShopNumberEntry[];
  return (
    <AnimatePresence>
      {entries.length > 0 && (
        <div className="absolute top-2 left-2">
          <ul className="flex flex-col">
            {entries.map(
              (entry: TShopNumberEntry, index) => (
                <Item
                  key={entry[0]}
                  index={index}
                  entry={entry}
                />
              ),
            )}
          </ul>
        </div>
      )}
    </AnimatePresence>
  );
};
