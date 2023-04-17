import type { TKillHandlerConfig } from "@moth-hooks/useKill";
import type { FC } from "react";
import { useState } from "react";
import type { Mesh } from "three";
import { DoubleSide } from "three";
import type { TShot } from "./config";
import { useShot } from "@moth-hooks/frames/useShot";

export type TShotRef = Mesh | null;

type TProps = TShot & {
  onKill(config: TKillHandlerConfig): void;
  speed: number;
};
export const Shot: FC<TProps> = (props) => {
  const { x, y, onKill, speed, name } = props;
  const [shot, setShot] = useState<TShotRef>(null);

  useShot({
    name,
    speed,
    onKill,
    shot,
  });

  const resolveRef = (instance: Mesh) => {
    if (!shot && instance) {
      instance.position.x = x;
      instance.position.y = y;
      setShot(instance);
    }
  };

  return (
    <mesh ref={resolveRef}>
      <planeGeometry />
      <meshBasicMaterial color="white" side={DoubleSide} />
    </mesh>
  );
};
