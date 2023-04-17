import { RIVER_HORSE_ROUTES } from "./bosses/river-horse";
import { BOSSES_ROUTES } from "./bosses";
import { Enemies } from "@moth/pages/workshop/enemies";

export const ENEMIES_ROUTES = [
  {
    path: "/workshop/enemies",
    element: <Enemies />,
  },
  ...BOSSES_ROUTES,
  ...RIVER_HORSE_ROUTES,
];
