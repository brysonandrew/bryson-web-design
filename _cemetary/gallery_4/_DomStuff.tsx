import { FC, useRef, useState } from "react";
import "@react-three/fiber";
import {
  motion as motionDom,
  useMotionValue,
  MotionConfig,
} from "framer-motion";
import styled from "@emotion/styled";
import { Main } from "./Main";
import { TMediaRecord } from "@pages/showcase/config";

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
  isFullscreen: boolean;
};
export const Gallery: FC<TProps> = ({}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Container
      data-is-fullscreen={isFullscreen}
      onClick={() => setIsFullscreen(!isFullscreen)}
    >
      <MotionConfig transition={{ duration: 4 }}>
        <Content>
          <motionDom.div
            className="canvas-container"
            layout
          >
            <Main isFullscreen={isFullscreen} />
          </motionDom.div>
          <motionDom.h1
            layout
            animate={{
              color: isFullscreen ? "#fff" : "#000",
            }}
          >
            {`Framer Motion`}
            <br />
            {`React Three Fiber`}
          </motionDom.h1>
          <motionDom.p
            layout
            animate={{ opacity: isFullscreen ? 0 : 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse vel diam dapibus,
            laoreet augue at, tempus ex.
          </motionDom.p>
        </Content>
      </MotionConfig>
    </Container>
  );
};

const Container = styled.div`
  flex-direction: row-reverse;
  justify-content: center;
  align-items: stretch;
  padding: 100px 0 200px 100px;
  width: 1100px;
  height: 500px;
  position: relative;

  &[data-is-fullscreen="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
  }

  &[data-is-fullscreen="true"] h1 {
    position: absolute;
    top: 200px;
    left: 144px;
  }

  &[data-is-fullscreen="true"] p {
    position: absolute;
    left: -550px;
    top: 480px;
  }

  &[data-is-fullscreen="true"] .canvas-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
  }

  .canvas-container {
    background: #a2b9e7;
    width: 600px;
    height: 500px;
  }
`;

const Content = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    font-size: 54px;
    line-height: 54px;
    white-space: nowrap;
    text-align: right;
    text-transform: uppercase;
  }

  p {
    width: 500px;
    font-size: 24px;
    text-align: right;
    font-weight: 400;
  }
`;
