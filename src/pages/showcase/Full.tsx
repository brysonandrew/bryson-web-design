import { useFreezeScrollBar } from "@hooks/useFreezeScroll";
import { HEADER_SIZE_Y } from "@pages/index/constants";
import type { FC } from "react";
import { Container } from "./Containers";

type TProps = {
  item: string;
};
export const Full: FC<TProps> = ({ item }) => {
  useFreezeScrollBar();
  return (
    <>
      <Container
        id={item}
        classValue="fixed text-teal-bright" 
        style={{ top: HEADER_SIZE_Y }}
      >
        <div>
          {
            "itemzlxcfj;asdklj;AKSJFD;lkajdsf;KAJDF;LKJWSDL;DFAJK"
          }
          <div>asldkjf;alkjsdfl;kajsdf</div>
        </div>
      </Container>
    </>
  );
};
