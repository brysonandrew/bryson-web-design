import type { FC } from "react";
import type { TChildren } from "@t/index";
import { useKeyControl } from "@moth-components/moth/key-control/useKeyControl";

type TProps = { children: TChildren };
export const LightsAndControl: FC<TProps> = ({ children }) => {
  useKeyControl();
  return (
    <>
      <ambientLight intensity={0.3} />
      {children}
    </>
  );
};
