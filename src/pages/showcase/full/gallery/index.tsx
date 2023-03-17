import styled from "@emotion/styled";
import { TMediaRecord } from "@pages/showcase/config";
import { Loader } from "@react-three/drei";
import { FC, useRef, useState } from "react";
import { Main } from "./Main";
import { Provider } from "./state/Provider";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background: linear-gradient(
    to bottom,
    #0d0d10,
    #1d1d20,
    #212125
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

type TPos = { left: number; top: number };
const POS: TPos = { left: 0, top: 0 };

const ScrollArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  `;

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Gallery: FC<TProps> = ({
  mediaRecord,
  selectedPath,
}) => {
  const posRef = useRef(POS);

  const [scrollArea, setArea] =
    useState<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (scrollArea) {
      posRef.current.top = scrollArea.scrollLeft;
    }
  };

  const items = mediaRecord[selectedPath];
  console.log("🚀 ~ file: index.tsx:54 ~ items:", items)

  return (
    <Root>
      {scrollArea && (
        <Provider
          items={items}
          scrollArea={scrollArea}
          posRef={posRef}
        >
          <Main />
        </Provider>
      )}
      <ScrollArea
        //className=" left-0 top-0 h-screen w-screen z-20 bg-teal-dark-01"
        ref={(instance) => {
          if (instance && !scrollArea) {
            setArea(instance);
          }
        }}
        onScroll={onScroll}
      >
        <div
          style={{
            height: "100vh",
            width: `${items.length * 100}vw`,
            backgroundColor: "rgba(200,2,22,0.1)",
          }}
        />
      </ScrollArea>
      {/* <Loader
        containerStyles={{
          zIndex: 99,
          backgroundColor: "rgba(220,22,22,0.2)",
        }}
      /> */}
    </Root>
  );
};
