import { Background } from "@components/background";
import { Filters } from "../components/Filters";
import type { TChildren } from "@t/index";
import type { FC} from "react";
import { useEffect } from "react";

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
