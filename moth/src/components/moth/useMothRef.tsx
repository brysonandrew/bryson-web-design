import { BLADES_NAME } from "@moth-components/tagmata/wings/shuriken/constants";
import { useViewport } from "@moth-hooks/useViewport";
import { useMothContext } from "@moth-state/Context";
import { Group, Mesh } from "three";
import { PADDING_Y, SPOT_NAMES } from "./constants";
import { MOTH_NAME } from "@moth-constants/index";

export const useMothRef = () => {
  const { dispatch, moth } = useMothContext();
  const viewport = useViewport();

  const handler = (instance: Group) => {
    if (!moth && instance) {
      const spots: Mesh[] = [];
      const meshes: Mesh[] = [];
      let blades: Group | null = null;

      instance.position.y =
        -viewport.height / 2 + PADDING_Y;

      for (const child of instance.children) {
        if (child instanceof Mesh) {
          if (SPOT_NAMES.includes(child.name)) {
            child.scale.set(0, 0, 0);
            spots.push(child);
          } else {
            meshes.push(child);
          }
        }
        if (child instanceof Group) {
          if (BLADES_NAME === child.name) {
            child.children.forEach((mesh) => {
              if (
                mesh instanceof Mesh &&
                !Array.isArray(mesh.material)
              ) {
                mesh.material.opacity = 0.1;
              }
            });
            blades = child;
          }
        }
      }
      dispatch({
        type: "add-moth",
        value: {
          moth: {
            progressId: MOTH_NAME,
            id: MOTH_NAME,
            instance,
            x: instance.position.x,
            y: instance.position.y,
            width: 10,
            height: 10,
            xp: 0,
          },
          spots,
          meshes,
          blades,
          specials: {},
        },
      });
    }
  };

  return handler;
};
