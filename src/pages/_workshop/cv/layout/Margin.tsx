import styled from "@emotion/styled";
import type { TChildren } from "@lib/types/dom";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.div)``;

type TProps = { children: TChildren };
export const Margin: FC<TProps> = ({ children }) => <Root className="relative w-3/4">{children}</Root>;
