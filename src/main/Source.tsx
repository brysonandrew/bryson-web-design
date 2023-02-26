import { NotFound404 } from "@components/not-found-404";
import { Index } from "@pages/index";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { Workshop } from "@pages/workshop";
import { Contact } from "@pages/contact";
import { Glitch } from "@pages/workshop/glitch";
import { Edges } from "@pages/workshop/edges";
import { Sobel } from "@pages/workshop/sobel";
import { Phase } from "@pages/workshop/phase";
import { Lighting } from "@pages/workshop/lighting";
import { Displacement } from "@pages/workshop/displacement";
import { ShadowText } from "@pages/workshop/shadow-text";
import { Trail } from "@pages/workshop/trail";
import { Ghost } from "@pages/workshop/ghost";
import { Pool } from "@pages/workshop/pool";

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
      path: "/workshop",
      element: <Workshop />,
    },
    {
      path: "/workshop/edges",
      element: <Edges />,
    },
    {
      path: "/workshop/sobel",
      element: <Sobel />,
    },
    {
      path: "/workshop/glitch",
      element: <Glitch />,
    },
    {
      path: "/workshop/ghost",
      element: <Ghost />,
    },
    {
      path: "/workshop/phase",
      element: <Phase />,
    },
    {
      path: "/workshop/lighting",
      element: <Lighting />,
    },
    {
      path: "/workshop/displacement",
      element: <Displacement />,
    },
    {
      path: "/workshop/shadow-text",
      element: <ShadowText />,
    },
    {
      path: "/workshop/trail",
      element: <Trail />,
    },
    {
      path: "/workshop/pool",
      element: <Pool />,
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {cloneElement(element, {
        key: location.pathname,
      })}
    </AnimatePresence>
  );
};
