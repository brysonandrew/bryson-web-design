import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { Source } from "./Source";
import { MothProvider } from "@moth-state/Provider";
import { Boundary } from "@moth-components/boundary";
import { MOTION_CONFIG } from "@moth-constants/animation";
import { BrowserRouter as _Router } from "react-router-dom";

const root = document.getElementById("root");
if (root)
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <MothProvider> 
        <MotionConfig {...MOTION_CONFIG}>
          <Boundary> 
            <_Router>
              <Source />
            </_Router>
          </Boundary>
        </MotionConfig>
      </MothProvider>
    </StrictMode>,
  );
