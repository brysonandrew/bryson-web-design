import { LighthouseCaptain as _LighthouseCaptain } from "@moth-components/enemies/bosses/lighthouse-captain";
import { BASE_ENEMY_CONFIG } from "@moth-components/enemies/constants";
import { Shell } from "@moth-pages/index/main/Shell";
import { OrbitControls } from "@react-three/drei";

const props = {
  ...BASE_ENEMY_CONFIG,
};
export const LighthouseCaptain = () => (
  <Shell>
    <OrbitControls />
    <group>
      <_LighthouseCaptain {...props} instance={null} />
    </group>
  </Shell>
);
