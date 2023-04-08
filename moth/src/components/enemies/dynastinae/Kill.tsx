import { Gun } from "@components/gun";
import type { TShotsConfig } from "@components/gun/useShots";
import { useMothContext } from "@state/Context";
import type { TSource } from "@state/types";
import type { FC } from "react";
import { useRef } from "react";

type TProps = {
  source: TSource;
};
export const Kill: FC<TProps> = ({ source }) => {
  const shotsRef = useRef<TShotsConfig>({
    firingRate: 0.001,
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
