import { MOTION_CONFIG } from "@constants/animation";
import { MotionConfig } from "framer-motion";
import { Suspense } from "react";
import { MothProvider } from "@moth/state/Provider";
import { SampleSongs as _SampleSongs } from "@pages/sample-songs";

export const SampleSongs = () => (
  <Suspense fallback={null}>
    <MothProvider>
      <MotionConfig {...MOTION_CONFIG}>
        <_SampleSongs />
      </MotionConfig>
    </MothProvider>
  </Suspense>
);
