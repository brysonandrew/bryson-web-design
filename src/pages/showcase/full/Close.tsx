import { Cross } from "@components/icons/Cross";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { HEADER_SIZE } from "./gallery/sections/constants";

export const Close: FC = () => {
  return (
    <div
      className="absolute top-10 right-18 flex items-center justify-between z-10"
      style={{ height: HEADER_SIZE }}
    >
      <Link
        className="relative p-2.5 rounded-full bg-teal-dark-02"
        to="/showcase"
      >
        <Cross />
      </Link>
    </div>
  );
};
