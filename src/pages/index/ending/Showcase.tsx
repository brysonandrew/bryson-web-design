import { type HTMLMotionProps } from "framer-motion";
import { type FC } from "react";
import { MenuLink } from "./MenuLink";

type TProps = HTMLMotionProps<"div">;
export const Showcase: FC<TProps> = () => <MenuLink to="/showcase">Showcase</MenuLink>;
