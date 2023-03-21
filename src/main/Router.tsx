import type { FC } from "react";
import type { RouterProps } from "react-router";
import { BrowserRouter as _Router } from "react-router-dom";
import { Source } from "./Source";
import { Cursor } from "@components/cursor";
import { useNoPointer } from "@hooks/useNoPointer";
import { Background } from "@components/background";
import { Filters } from "./Filters";

type TProps = Partial<RouterProps>;
export const Router: FC<TProps> = () => {
  const isPointer = useNoPointer();
  return (
    <_Router>
      <Filters />
      <Background />
      <Source />
      {/* {isPointer && <Cursor />} */}
    </_Router>
  );
};
 