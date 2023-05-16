import { Filters } from "../components/Filters";
import type { TChildren } from "@t/index";
import type { FC } from "react";
import { useStyles } from "@styles/useStyles";
import { Background } from "@components/background";

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useStyles();
  return (
    <>
      <Filters />
      {children}
    </>
  );
};
 