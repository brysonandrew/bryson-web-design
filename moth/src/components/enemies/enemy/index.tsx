import { useMothContext } from "@moth-state/Context";
import type { TSource } from "@moth-state/types";
import type { TChildrenElement } from "@t/index";
import type { FC } from "react";
import type { Group } from "three";

type TProps = TSource & {
  children(props: TSource): TChildrenElement;
};
export const Enemy: FC<TProps> = ({
  children,
  ...props
}) => {
  const { dispatch } = useMothContext();

  const resolveRef = (instance: Group) => {
    if (!props.instance && instance) {
      instance.position.x = props.x;
      instance.position.y = props.y;
      dispatch({
        type: "update-enemy",
        value: {
          ...props,
          instance,
        },
      });
    }
  };

  if (props.instance) {
    return (
      <group
        ref={resolveRef}
        rotation={[0, Math.PI, Math.PI]}
      >
        {children(props)}
      </group>
    );
  } else {
    return null;
  }
};
