import { Contact } from "@pages/contact";
import { Index } from "@pages/index";
import { NotFound404 } from "@pages/not-found-404";
import { Showcase } from "@pages/showcase";
import { useRoutes } from "react-router-dom";
import { MOTH_ROUTES } from "./moth";
import { OstWip } from "@pages/ost-wip";
import { AlbumCover } from "@pages/album-cover";
import { Sample as SampleSongs } from "@pages/songs/sample";
import { Hype as HypeSongs } from "@pages/songs/hype";
import { Card } from "@pages/card";
import { Cv } from "@pages/cv";
import { Background } from "@pages/background";

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
    {
      path: "/card",
      element: <Card />,
    },
    {
      path: "/cv",
      element: <Cv />,
    },
    {
      path: "/background",
      element: <Background />,
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
