import { Contact } from "@pages/contact";
import { Index } from "@pages/index";
import { NotFound404 } from "@pages/not-found-404";
import { Showcase } from "@pages/showcase";
import { useRoutes } from "react-router-dom";
import { MOTH_ROUTES } from "./moth";
import { OstWip } from "@pages/ost-wip";
import { AlbumCover } from "@pages/ost-wip/album-cover";
import { Sample as SampleSongs } from "@pages/songs/sample";
import { Hype as HypeSongs } from "@pages/songs/hype";

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
      path: "/songs",
      element: <SampleSongs />,
    },
    {
      path: "/hype",
      element: <HypeSongs />,
    },
    {
      path: "/ost-wip",
      element: <OstWip />,
    },
    {
      path: "/album-cover",
      element: <AlbumCover />,
    },
    ...MOTH_ROUTES,
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
  if (!element) return null;

  return element;
};
