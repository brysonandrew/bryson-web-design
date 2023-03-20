import { useDetectGPU } from "@react-three/drei";
import type { HTMLMotionProps } from "framer-motion";
import { FC } from "react";

import { Motion, TChildrenProps } from "./Motion";
import { Shell } from "./Shell";

type TProps = HTMLMotionProps<"div">;
export const Reviews: FC<TProps> = () => {
  const { tier } = useDetectGPU();
  switch (tier) {
    case 3: {
      return (
        <Motion>
          {(props: TChildrenProps) => <Shell {...props} />}
        </Motion>
      );
    }
    default: {
      return <Shell />;
    }
  }
};
