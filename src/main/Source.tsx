import { NotFound404 } from "@components/not-found-404";
import { Index } from "src/pages";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { Workshop } from "@pages/workshop";
import { Contact } from "@pages/contact";
import { Glitch } from "@pages/glitch";

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
      path: "/glitch",
      element: <Glitch />,
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
