import { Index } from "@pages/index";
import { NotFound404 } from "@pages/not-found-404";
import { Ost } from "@moth-pages/sample-songs";
import { Workshop } from "@pages/workshop";
import { Enemies } from "@pages/workshop/enemies";
import { Bug } from "@pages/workshop/enemies/bug";
import { Dynastinae } from "@pages/workshop/enemies/dynastinae";
import { Galamodo } from "@pages/workshop/enemies/galamodo";
import { Hercules } from "@pages/workshop/enemies/hercules";
import { RiverHorse } from "@pages/workshop/enemies/river-horse";
import { Moth } from "@pages/workshop/moth";
import { Abilities } from "@pages/workshop/sounds/abilities";
import { Speech } from "@pages/workshop/speech";
import { useRoutes } from "react-router-dom";

export const Source = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/ost",
      element: <Ost />,
    },
    {
      path: "/workshop",
      element: <Workshop />,
    },
    {
      path: "/workshop/moth",
      element: <Moth />,
    },
    {
      path: "/workshop/enemies",
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
      path: "/workshop/enemies/river-horse",
      element: <RiverHorse />,
    },
    {
      path: "/workshop/sounds/abilities",
      element: <Abilities />,
    },
    {
      path: "/workshop/speech",
      element: <Speech />,
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
  if (!element) return null;

  return element;
};
