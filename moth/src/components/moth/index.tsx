import { MOTH_NAME } from "@moth-constants/index";
import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { useRef } from "react";
import { Body } from "./Body";
import { Kill } from "./Kill";
import { useKeyControl } from "./key-control/useKeyControl";
import type { TCurrent } from "./types";
import { useMothRef } from "./useMothRef";

export const Moth: FC = () => {
  const {
    moth,
    spots,
    meshes,
    level,
    blades,
    controls,
    inventory,
    activeSpecial,
    specials,
    isSound
  } = useMothContext();
  const current: TCurrent = {
    moth,
    spots,
    meshes,
    level,
    blades,
    controls,
    inventory,
    activeSpecial,
    specials,
    isSound
  };
  const keyRef = useRef<TCurrent>(current);
  keyRef.current = current;

  useKeyControl({ keyRef });

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
