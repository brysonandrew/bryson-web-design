import { Gun } from "@components/gun";
import { useMothContext } from "@state/Context";
import type { FC } from "react";
import { useCollision } from "./useCollision";
import type { TSource } from "@state/types";

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
 