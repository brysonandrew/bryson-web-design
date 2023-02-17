import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { Router } from "./Router";
import { Source } from "./Source";
import { Provider } from "@state/Provider";
import { Boundary } from "@components/Boundary";
import { MOTION_CONFIG } from "@constants/animation";

const root = document.getElementById("root");
if (root)
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <Provider>
        <MotionConfig {...MOTION_CONFIG}>
          <Boundary>
            <Router history={history}>
              <Source />
            </Router>
          </Boundary>
        </MotionConfig>
      </Provider>
    </StrictMode>,
  );
