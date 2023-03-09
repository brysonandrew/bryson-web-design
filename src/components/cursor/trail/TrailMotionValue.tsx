import type { FC} from "react";
import { useEffect } from "react";
import { useMotionValue } from "framer-motion";
import { useContext } from "@state/Context";

type TProps = {
  index: number;
};
export const TrailMotionValue: FC<TProps> = ({ index }) => {
  const { dispatch, motionValuePairs } = useContext();
  const valueX = useMotionValue(0);
  const valueY = useMotionValue(0);
  useEffect(() => {
    if (typeof motionValuePairs[index] === "undefined") {
      dispatch({
        type: "add-motion-value",
        value: { pair: [valueX, valueY], index },
      });
    }
  }, []);
  return null;
};
