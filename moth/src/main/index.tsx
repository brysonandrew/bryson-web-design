import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { Source } from "./Source";
import { Provider } from "@state/Provider";
import { Boundary } from "@components/boundary";
import { MOTION_CONFIG } from "@constants/animation";
import { BrowserRouter as _Router } from "react-router-dom";
import "virtual:windi.css";
import "@styles/fonts.css";
import "@styles/globals.css";

const root = document.getElementById("root");
if (root)
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <Provider> 
        <MotionConfig {...MOTION_CONFIG}>
          <Boundary>
            <_Router>
              <Source />
            </_Router>
          </Boundary>
        </MotionConfig>
      </Provider>
    </StrictMode>,
  );
