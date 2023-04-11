import { MOTION_CONFIG } from "@constants/animation";
import { MotionConfig } from "framer-motion";
import { Suspense } from "react";
import { MothProvider } from "@moth/state/Provider";
import { Ost as _Ost } from "@moth/pages/ost";

export const Ost = () => (
  <Suspense fallback={null}>
    <MothProvider>
      <MotionConfig {...MOTION_CONFIG}>
        <_Ost />
      </MotionConfig>
    </MothProvider>
  </Suspense>
);
