import { type HTMLMotionProps } from "framer-motion";
import { type FC } from "react";
import { MenuLink } from "./MenuLink";

type TProps = HTMLMotionProps<"div">;
export const Projects: FC<TProps> = () => <MenuLink to="/projects">Projects</MenuLink>;
