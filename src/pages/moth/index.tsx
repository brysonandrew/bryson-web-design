import { MOTION_CONFIG } from "@constants/animation";
import { MotionConfig } from "framer-motion";
import { Suspense } from "react";
import { MothProvider } from "@moth/state/Provider";
import { Index as _Moth } from "@moth/pages/index";

export const Moth = () => (
  <Suspense fallback={null}>
    <MothProvider>
      <MotionConfig {...MOTION_CONFIG}>
        <_Moth />
      </MotionConfig>
    </MothProvider>
  </Suspense>
);
