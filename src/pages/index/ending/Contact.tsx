import { type HTMLMotionProps } from "framer-motion";
import { type FC } from "react";
import { MenuLink } from "./MenuLink";

type TProps = HTMLMotionProps<"div">;
export const Contact: FC<TProps> = () => {
  return <MenuLink to="/contact">Contact</MenuLink>;
};
