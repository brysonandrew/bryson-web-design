import { Bug } from "@moth/pages/workshop/enemies/creatures/bug";
import { Dynastinae } from "@moth/pages/workshop/enemies/creatures/dynastinae";
import { Galamodo } from "@moth/pages/workshop/enemies/creatures/galamodo";
import { Hercules } from "@moth/pages/workshop/enemies/creatures/hercules";
import { Mite } from "@moth/pages/workshop/enemies/creatures/mite";
import { MiteI } from "@moth/pages/workshop/enemies/creatures/mite-I";
import { Enemies } from "@pages/moth/enemies/index";

export const CREATURES_ROUTES = [
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
];
