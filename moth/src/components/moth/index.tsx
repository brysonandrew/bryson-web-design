import { MOTH_NAME } from "@moth-constants/index";
import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { Body } from "./Body";
import { Kill } from "./Kill";
import { useKeyControl } from "./key-control/useKeyControl";
import { useMothRef } from "./useMothRef";

export const Moth: FC = () => {
  const { moth } = useMothContext();
  useKeyControl();
  const resolveRef = useMothRef();

  return (
    <group rotation={[0, Math.PI, 0]}>
      <group name={MOTH_NAME} ref={resolveRef}>
        <Body />
      </group>
      {moth && <Kill moth={moth} />}
    </group>
  );
};
