import { Bug } from "@moth/pages/workshop/enemies/bug";
import { Dynastinae } from "@moth/pages/workshop/enemies/dynastinae";
import { Galamodo } from "@moth/pages/workshop/enemies/galamodo";
import { Hercules } from "@moth/pages/workshop/enemies/hercules";
import { Mite } from "@moth/pages/workshop/enemies/mite";
import { MiteI } from "@moth/pages/workshop/enemies/mite-I";
import { Enemies } from "@pages/moth/enemies/index";
import { RIVER_HORSE_ROUTES } from "./levels/river-horse";

export const ENEMIES_ROUTES = [
  {
    path: "/moth/enemies",
    element: <Enemies />,
  },
  {
    path: "/workshop/enemies/hercules",
    element: <Hercules />,
  },
  {
    path: "/workshop/enemies/dynastinae",
    element: <Dynastinae />,
  },
  {
    path: "/workshop/enemies/galamodo",
    element: <Galamodo />,
  },
  {
    path: "/workshop/enemies/bug",
    element: <Bug />,
  },
  {
    path: "/workshop/enemies/mite",
    element: <Mite />,
  },
  {
    path: "/workshop/enemies/mite-i",
    element: <MiteI />,
  },
  ...RIVER_HORSE_ROUTES,
];
