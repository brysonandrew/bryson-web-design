import { BASE_ENEMY_CONFIG } from "@moth-components/enemies/constants";
import { Hercules as _Hercules } from "@moth-components/enemies/creatures/hercules";
import { Shell } from "@moth-pages/index/main/Shell";
import { OrbitControls } from "@react-three/drei";

const props = BASE_ENEMY_CONFIG;

export const Hercules = () => (
  <Shell>
    <OrbitControls />
    <_Hercules {...props} />
  </Shell>
);
