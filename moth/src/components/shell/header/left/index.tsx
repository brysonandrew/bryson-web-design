import { Beam } from "@components/icons/Beam";
import { Nuke } from "@components/icons/Nuke";
import { MD, SM, XS } from "@constants/styles";
import type { TShopNumberEntry } from "@components/moth/types";
import { useMothContext } from "@state/Context";
import type { TShopKey } from "@state/constants";
import type { TBaseIconMotionProps } from "@t/icons";
import { pascalToTitle } from "@utils/format";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { Fragment } from "react";

const ICON_LOOKUP: Record<
  TShopKey,
  FC<TBaseIconMotionProps>
> = {
  TacticalNuke: Nuke,
  NeutronicBeam: Beam,
};

export const Left = () => {
  const { inventory, activeSpecial } = useMothContext();
  const entries = Object.entries(
    inventory,
  ) as TShopNumberEntry[];
  return (
    <AnimatePresence>
      {entries.length > 0 && (
        <div className="absolute top-2 left-2">
          <ul className="flex flex-col">
            {entries.map(
              ([key, value]: TShopNumberEntry, index) => {
                const Icon = ICON_LOOKUP[key];
                return (
                  <Fragment key={key}>
                    {index !== 0 && <li className="py-1" />}
                    <li className="relative flex items-center px-2">
                      {activeSpecial === index && (
                        <div className="absolute inset-0 bg-teal-02" />
                      )}
                      <div>
                        <Icon classValue={XS} />
                      </div>
                      <div className="p-1" />
                      <h6 className="text-sm">
                        {pascalToTitle(key)}
                      </h6>
                      <div className="p-1" />
                      <h6 className="text-sm">{value}</h6>
                    </li>
                  </Fragment>
                );
              },
            )}
          </ul>
        </div>
      )}
    </AnimatePresence>
  );
};
