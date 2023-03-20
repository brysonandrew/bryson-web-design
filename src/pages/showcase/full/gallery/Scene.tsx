import { createPortal } from "@react-three/fiber";
import type { TChildren } from "@t/index";
import type { FC} from "react";
import { useState } from "react";
import { Scene as _Scene } from "three";

type TProps = { children(scene: _Scene): TChildren };
export const Scene: FC<TProps> = ({ children }) => {
  const [scene] = useState(new _Scene());
  return createPortal(<>{children(scene)}</>, scene);
};
