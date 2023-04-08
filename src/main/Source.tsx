import { Contact } from "@pages/contact";
import { Index } from "@pages/index";
import { Moth } from "@pages/moth";
import { NotFound404 } from "@pages/not-found-404";
import { Showcase } from "@pages/showcase";
import { useRoutes } from "react-router-dom";

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
      path: "*",
      element: <NotFound404 />,
    },
  ]);
  if (!element) return null;

  return element;
};
