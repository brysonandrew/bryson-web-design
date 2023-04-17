import { Gun } from "@moth-components/gun";
import type { TShotFiringConfig } from "@moth-components/gun/useShots";
import { useMothContext } from "@moth-state/Context";
import type { TSource } from "@moth-state/types";
import type { FC } from "react";
import { useRef } from "react";

type TProps = {
  source: TSource;
};
export const Kill: FC<TProps> = ({ source }) => {
  const shotsRef = useRef<TShotFiringConfig>({
    firingRate: 0.0001,
    firingStart: 0,
    firingSpeed: -4,
    range: 100,
  });
  const { moth } = useMothContext();

  return (
    <>
      {source.instance && moth && (
        <Gun
          shotsRef={shotsRef}
          killConfig={{
            source,
            targets: [moth],
          }}
        />
      )}
    </>
  );
};
