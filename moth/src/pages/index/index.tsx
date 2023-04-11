import { Shell } from "@moth-components/shell";
import { Suspense, useEffect } from "react";
import { Main } from "./main";
import { useMothContext } from "@moth-state/Context";
import { Start } from "./start";

export const Index = () => {
  const { start } = useMothContext();

  useEffect(() => {
    import("../../styles/fonts.css");
    import("../../styles/globals.css");
  }, []);

  return (
    <>
      {start ? (
        <Shell>
          <Main />
        </Shell>
      ) : (
        <Start />
      )}
    </>
  );
};
