import { Background } from "@components/background";
import { Filters } from "./Filters";
import { TChildren } from "@t/index";
import { FC, useEffect } from "react";

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useEffect(() => {
    import("@styles/globals.css");
    import("@styles/fonts.css");
  }, []);
  return (
    <>
      <Filters />
      <Background />
      {children}
    </>
  );
};
