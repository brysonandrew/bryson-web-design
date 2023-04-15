import { MOTION_CONFIG } from "@constants/animation";
import { MotionConfig } from "framer-motion";
import { Suspense } from "react";
import { MothProvider } from "@moth/state/Provider";
import { Enemies as _Enemies } from "@moth/pages/workshop/enemies";

export const Enemies = () => (
  <Suspense fallback={null}>
    <MothProvider>
      <MotionConfig {...MOTION_CONFIG}>
        <_Enemies />
      </MotionConfig>
    </MothProvider>
  </Suspense>
);
