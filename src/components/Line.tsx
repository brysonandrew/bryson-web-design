import styled from "@emotion/styled";
import type { FC } from "react";

const Root = styled.hr``;

export const Line: FC = () => <Root className="flex bg-red w-full h-px opacity-40" />;
