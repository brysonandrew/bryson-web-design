import { Bug } from "@moth/pages/workshop/enemies/creatures/bug";
import { Dynastinae } from "@moth/pages/workshop/enemies/creatures/dynastinae";
import { Galamodo } from "@moth/pages/workshop/enemies/creatures/galamodo";
import { Hercules } from "@moth/pages/workshop/enemies/creatures/hercules";
import { Mite } from "@moth/pages/workshop/enemies/creatures/mite";
import { MiteI } from "@moth/pages/workshop/enemies/creatures/mite-I";
import { Enemies } from "@pages/moth/enemies/index";
import { RIVER_HORSE_ROUTES } from "./bosses/river-horse";
import { BOSSES_ROUTES } from "./bosses";

export const ENEMIES_ROUTES = [
  ...BOSSES_ROUTES,
  ...RIVER_HORSE_ROUTES,
];
