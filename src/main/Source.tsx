import { Contact } from "@pages/contact";
import { Index } from "@pages/index";
import { Moth } from "@pages/moth/index";
import { Ost } from "@pages/ost/index";
import { NotFound404 } from "@pages/not-found-404";
import { Showcase } from "@pages/showcase";
import { useRoutes } from "react-router-dom";
import { AlbumCover } from "@moth-hooks/sounds/album-cover";

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
      path: "/ost",
      element: <Ost />,
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
