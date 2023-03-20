import { useDetectGPU } from "@react-three/drei";
import type { HTMLMotionProps } from "framer-motion";
import type { FC } from "react";

import type { TChildrenProps } from "./Motion";
import { Motion } from "./Motion";
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
