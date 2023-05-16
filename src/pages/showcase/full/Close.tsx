import { Cross } from "@components/icons/Cross";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { HEADER_SIZE } from "./gallery/sections/constants";
import { useOffSound } from "@hooks/sounds/useOffSound";
import { motion } from "framer-motion";

export const Close: FC = () => {
  const handleOnSound = useOffSound();

  return (
    <div
      className="absolute top-10 right-9 lg:right-18 flex items-center justify-between z-10"
      style={{ height: HEADER_SIZE }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 w-10 h-10 rounded-full bg-gray-dark opacity-50 shadow-teal-bright-sm"
        style={{ x: "-50%", y: "-50%" }}
      />
      <Link
        className="relative p-5 rounded-full bg-red-dark-02"
        to="/showcase"
        onClick={handleOnSound}
      >
        <Cross />
      </Link>
    </div>
  );
};
