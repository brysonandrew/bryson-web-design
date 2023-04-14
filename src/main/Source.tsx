import { Contact } from "@pages/contact";
import { Index } from "@pages/index";
import { Moth } from "@pages/moth/index";
import { Ost } from "@pages/moth/ost/index";
import { Enemies } from "@pages/moth/enemies/index";
import { Bug } from "@moth/pages/workshop/enemies/bug";
import { RiverHorse } from "@moth/pages/workshop/enemies/river-horse";
import { Hercules } from "@moth/pages/workshop/enemies/hercules";
import { Dynastinae } from "@moth/pages/workshop/enemies/dynastinae";
import { Galamodo } from "@moth/pages/workshop/enemies/galamodo";
import { Mite } from "@moth/pages/workshop/enemies/mite";
import { MiteI } from "@moth/pages/workshop/enemies/mite-i";

import { OstWip } from "@pages/ost-wip/index";
import { NotFound404 } from "@pages/not-found-404";
import { Showcase } from "@pages/showcase";
import { useRoutes } from "react-router-dom";
import { AlbumCover } from "@pages/ost-wip/album-cover";

export const Source = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/showcase",
      element: <Showcase />,
    },
    {
      path: "/moth",
      element: <Moth />,
    },
    {
      path: "/moth/ost",
      element: <Ost />,
    },
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
    {
      path: "/workshop/enemies/river-horse",
      element: <RiverHorse />,
    },
    {
      path: "/ost-wip",
      element: <OstWip />,
    },
    {
      path: "/album-cover",
      element: <AlbumCover />,
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
  if (!element) return null;

  return element;
};
