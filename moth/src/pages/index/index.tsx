import { Shell } from "@components/shell";
import { Suspense, useEffect } from "react";
import { Main } from "./main";
import { useMothContext } from "@state/Context";
import { Start } from "./start";
import { Provider } from "@state/Provider";
import { MOTION_CONFIG } from "@constants/animation";
import { MotionConfig } from "framer-motion";

export const Index = () => {
  const { start } = useMothContext();
  useEffect(() => {
    import("../../styles/fonts.css");
    import("../../styles/globals.css");
  }, []);
  return (
    <Suspense fallback={null}>
      <Provider>
        <MotionConfig {...MOTION_CONFIG}>
          {!start ? (
            <Start />
          ) : (
            <Shell>
              <Main />
            </Shell> 
          )}
        </MotionConfig>
      </Provider>
    </Suspense>
  );
};
