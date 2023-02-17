import { NotFound404 } from "@components/not-found-404";
import { Index } from "src/pages";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { Work } from "@pages/work";
import { amsterdamPhotosMetadata } from "@constants/photos";

export const Source = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/work",
      element: (
        <Work
          photos={amsterdamPhotosMetadata}
          title="Amsterdam Zuid nightwalk"
          titleWidth={8.2}
          category="zuid"
          alt="A building in Amsterdam Zuid at night"
        />
      ),
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
