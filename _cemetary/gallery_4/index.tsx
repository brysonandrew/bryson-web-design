import { TMediaRecord } from "@pages/showcase/config";
import "@react-three/fiber";
import { motion } from "framer-motion";
import { FC } from "react";
import { Main } from "./Main";
import { Lighting } from "./Lighting";

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Gallery: FC<TProps> = ({}) => {
  return (
    <motion.div className="fixed left-0 top-0 h-screen w-screen">
      <Main />
    </motion.div>
  );
};
