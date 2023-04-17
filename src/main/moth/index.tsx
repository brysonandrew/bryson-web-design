import { Moth as WorkshopMoth } from "@moth/pages/workshop/moth";
import { Moth } from "@pages/moth/index";
import { ENEMIES_ROUTES } from "./enemies";

export const MOTH_ROUTES = [
  {
    path: "/moth",
    element: <Moth />,
  },
  {
    path: "/workshop/moth",
    element: <WorkshopMoth />,
  },

  ...ENEMIES_ROUTES,
];
