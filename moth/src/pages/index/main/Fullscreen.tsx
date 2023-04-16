import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import type { FC } from "react";

const Root = styled.div``;

type TProps = { children: TChildren };
export const Fullscreen: FC<TProps> = ({ children }) => (
    <Root className="w-screen h-screen">{children}</Root>
  );
