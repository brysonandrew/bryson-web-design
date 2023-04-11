import { Spots } from "@moth-components/tagmata/spots";
import { Basic as Wings } from "@moth-components/tagmata/wings/basic";
import { Shuriken } from "@moth-components/tagmata/wings/shuriken";
import {
  GREY,
  TEAL_BRIGHT,
  WHITE,
} from "@moth-constants/colors";
import type { FC } from "react";
import { Thorax } from "./Thorax";
import { Specials } from "./specials";

export const Body: FC = () => (
  <>
    <Wings span={0.6} color={GREY} />
    <Shuriken color={WHITE} scale={0.02} transparent />
    <Thorax color={TEAL_BRIGHT} />
    <Spots span={1.7} color={TEAL_BRIGHT} />
    <Specials />
  </>
);
