import { Gun } from "@moth-components/gun";
import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { useCollision } from "./useCollision";
import type { TSource } from "@moth-state/types";

type TProps = {
  moth: TSource;
};
export const Kill: FC<TProps> = ({ moth }) => { 
  const { mothRef, enemies } = useMothContext();
  const killConfig = useCollision({
    source: moth,
    targets: enemies,
  });

  return <Gun shotsRef={mothRef} killConfig={killConfig} />;
};
 