import { STORY } from "@constants/copy";
import { Title } from "../Title";
import { Buttons } from "./buttons";

export const Tech = () => (
  <div className="flex flex-col items-center">
    <Title>{STORY.tech}</Title>
    <Buttons />
  </div>
);
