import { useMothContext } from "@moth-state/Context";
import { useMemo } from "react";

export const useGain = () => {
  const { context } = useMothContext();
  const node = useMemo<GainNode>(
    () => new GainNode(context),
    [],
  );
  return node;
};
