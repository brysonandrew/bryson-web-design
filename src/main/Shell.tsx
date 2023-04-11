import { Background } from "@components/background";
import { Filters } from "../components/Filters";
import type { TChildren } from "@t/index";
import type { FC } from "react";
import { useStyles } from "@moth-hooks/useStyles";

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useStyles();
  return (
    <>
      <Filters />
      <Background />
      {children}
    </>
  );
};
