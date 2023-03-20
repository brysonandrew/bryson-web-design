import styled from "@emotion/styled";
import type { TMediaRecord } from "@pages/showcase/config";
import type { FC} from "react";
import { useRef, useState } from "react";
import { Main } from "./Main";
import { Provider } from "./state/Provider";
import type { TPos } from "./state/types";
import { useFreezeScrollBar } from "@hooks/useFreezeScroll";

const POS: TPos = { left: 0, top: 0 };

const Root = styled.div`
  background: linear-gradient(
    to bottom,
    transparent,
    black
  );
`;

const ScrollArea = styled.div``;

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Gallery: FC<TProps> = ({
  mediaRecord,
  selectedPath,
}) => {
  const items = mediaRecord[selectedPath];
  const count = items.length;
  const pageCount = count - 1;
  useFreezeScrollBar();

  const posRef = useRef(POS);
  const [scrollArea, setScrollArea] =
    useState<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (scrollArea) {
      posRef.current.top = scrollArea.scrollLeft;
    }
  };

  return (
    <Root className="h-screen w-screen overflow-hidden">
      {scrollArea && (
        <Provider
          items={items}
          count={count}
          pageCount={pageCount}
          scrollArea={scrollArea}
          posRef={posRef}
        >
          <Main />
        </Provider>
      )}
      <ScrollArea
        className="absolute top-0 left-0 h-screen w-screen overflow-x-auto overflow-y-hidden"
        ref={(instance) => {
          if (instance && !scrollArea) {
            setScrollArea(instance);
          }
        }}
        onScroll={onScroll}
      >
        <div
          style={{
            height: "100vh",
            width: `${pageCount * 100}vw`,
          }}
        />
      </ScrollArea>
    </Root>
  );
};
