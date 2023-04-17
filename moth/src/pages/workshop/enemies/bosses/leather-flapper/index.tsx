import { RiverHorse as _RiverHorse } from "@moth-components/enemies/bosses/river-horse";
import { BASE_ENEMY_CONFIG } from "@moth-components/enemies/constants";
import { Shell } from "@moth-pages/index/main/Shell";

const props = {
  ...BASE_ENEMY_CONFIG,
};
export const LeatherFlapper = () => (
  <Shell>
    <group>
      <_RiverHorse {...props} instance={null} />
    </group>
  </Shell>
);
