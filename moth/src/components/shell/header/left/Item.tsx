import { Beam } from "@moth-components/icons/Beam";
import { Nuke } from "@moth-components/icons/Nuke";
import type { TShopNumberEntry } from "@moth-components/moth/types";
import { XS } from "@moth-constants/styles";
import { useMothContext } from "@moth-state/Context";
import type { TShopKey } from "@moth-state/types";
import type { TBaseIconMotionProps } from "@t/icons";
import { pascalToTitle } from "@utils/format";
import type { FC } from "react";

const ICON_LOOKUP: Record<
  TShopKey,
  FC<TBaseIconMotionProps>
> = {
  TacticalNuke: Nuke,
  NeutronicBeam: Beam,
};
type TProps = {
  index: number;
  entry: TShopNumberEntry;
};
export const Item: FC<TProps> = ({
  index,
  entry: [key, value],
}) => {
  const { activeSpecial } = useMothContext();
  const Icon = ICON_LOOKUP[key];
  return (
    <>
      {index !== 0 && <li className="py-1" />}
      <li className="relative flex items-center px-2">
        {activeSpecial === index && (
          <div className="absolute inset-0 bg-teal-02" />
        )}
        <div>
          <Icon classValue={XS} />
        </div>
        <div className="p-1" />
        <h6 className="text-sm">{pascalToTitle(key)}</h6>
        <div className="p-1" />
        <h6 className="text-sm">{value}</h6>
      </li>
    </>
  );
};
