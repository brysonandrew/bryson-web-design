import { Glitch as GlitchPass } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";

export const Glitch = () => (
  <GlitchPass
    delay={[1.5, 3.5] as any} // min and max glitch delay
    duration={[0.6, 1.0] as any} // min and max glitch duration
    strength={[0.3, 1.0] as any} // min and max glitch strength
    mode={GlitchMode.SPORADIC} // glitch mode
    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
    ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
  />
);
