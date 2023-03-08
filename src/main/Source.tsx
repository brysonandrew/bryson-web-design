import { NotFound404 } from "@components/not-found-404";
import { Contact } from "@pages/contact";
import { Index } from "@pages/index";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";

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
    // {
    //   path: "/workshop",
    //   element: <Workshop />,
    // },
    // {
    //   path: "/workshop/edges",
    //   element: <Edges />,
    // },
    // {
    //   path: "/workshop/sobel",
    //   element: <Sobel />,
    // },
    // {
    //   path: "/workshop/glitch",
    //   element: <Glitch />,
    // },
    // {
    //   path: "/workshop/ghost",
    //   element: <Ghost />,
    // },
    // {
    //   path: "/workshop/phase",
    //   element: <Phase />,
    // },
    // {
    //   path: "/workshop/lighting",
    //   element: <Lighting />,
    // },
    // {
    //   path: "/workshop/displacement",
    //   element: <Displacement />,
    // },
    // {
    //   path: "/workshop/shadow-text",
    //   element: <ShadowText />,
    // },
    // {
    //   path: "/workshop/trail",
    //   element: <Trail />,
    // },
    // {
    //   path: "/workshop/pool",
    //   element: <Pool />,
    // },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence>
      {cloneElement(element, {
        key: location.pathname,
      })}
    </AnimatePresence>
  );
};
