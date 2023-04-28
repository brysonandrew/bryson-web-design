import { MOTION_CONFIG } from "@constants/animation";
import { MotionConfig } from "framer-motion";
import { Suspense } from "react";
import { MothProvider } from "@moth/state/Provider";
import { Sample as _SampleSongs } from "@pages/songs/sample";

export const SampleSongs = () => (
  <Suspense fallback={null}>
    <MothProvider>
      <MotionConfig {...MOTION_CONFIG}>
        <_SampleSongs />
      </MotionConfig>
    </MothProvider>
  </Suspense>
);
