import { useKeyControl } from "@moth-components/moth/key-control/useKeyControl";
import type { TChildren } from "@t/index";
import { type FC } from "react";

type TProps = { children: TChildren };
export const CanvasShell: FC<TProps> = ({ children }) => {
  useKeyControl();
  return (
    <>
      <ambientLight intensity={0.3} />
      {children}
    </>
  );
};
