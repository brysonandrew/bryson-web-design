import type { TKillHandlerConfig } from "@moth-hooks/useKill";
import { useFrame } from "@react-three/fiber";
import type { FC } from "react";
import { useState } from "react";
import type { Mesh } from "three";
import { DoubleSide } from "three";
import type { TShot } from "./config";

type TProps = TShot & {
  onKill(config: TKillHandlerConfig): void;
  speed: number;
};
export const Shot: FC<TProps> = (props) => {
  const { x, y, onKill, speed, name } = props;
  const [shot, setShot] = useState<Mesh | null>(null);

  useFrame(() => {
    if (shot !== null) {
      const x = shot.position.x;
      const y = shot.position.y;
      onKill({ x, y, mesh: shot, name });
      shot.position.y = shot.position.y + speed;
    }
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
