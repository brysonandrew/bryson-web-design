import { ReactThreeFiber } from "@react-three/fiber";

export type CausticsProps =
  JSX.IntrinsicElements["group"] & {
    /** How many frames it will render, set it to Infinity for runtime, default: 1 */
    frames?: number;
    /** Enables visual cues to help you stage your scene, default: false */
    debug?: boolean;
    /** Will display caustics only and skip the models, default: false */
    causticsOnly: boolean;
    /** Will include back faces and enable the backsideIOR prop, default: false */
    backside: boolean;
    /** The IOR refraction index, default: 1.1 */
    ior?: number;
    /** The IOR refraction index for back faces (only available when backside is enabled), default: 1.1 */
    backsideIOR?: number;
    /** The texel size, default: 0.3125 */
    worldRadius?: number;
    /** Intensity of the prjected caustics, default: 0.05 */
    intensity?: number;
    /** Caustics color, default: white */
    color?: ReactThreeFiber.Color;
    /** Buffer resolution, default: 2048 */
    resolution?: number;
    /** Camera position, it will point towards the contents bounds center, default: [5, 5, 5] */
    lightSource?:
      | [x: number, y: number, z: number]
      | React.MutableRefObject<THREE.Object3D>;
  };
