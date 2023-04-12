import { MOTION_CONFIG } from "@constants/animation";
import { MotionConfig } from "framer-motion";
import { Suspense } from "react";
import { MothProvider } from "@moth/state/Provider";
import { OstWip as _OstWip } from "@moth/pages/ost-wip";

export const OstWip = () => (
  <Suspense fallback={null}>
    <MothProvider>
      <MotionConfig {...MOTION_CONFIG}>
        <_OstWip />
      </MotionConfig>
    </MothProvider>
  </Suspense>
);
