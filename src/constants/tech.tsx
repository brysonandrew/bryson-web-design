import { React } from "@components/icons/React";
import { Typescript } from "@components/icons/Typescript";

export type TItem = {
  title: string;
  href: string;
  icon: JSX.Element;
};

export const ITEMS: TItem[] = [
  {
    title: "React.js",
    href: "https://reactjs.org/",
    icon: <React />,
  },
  {
    title: "Typescript",
    href: "https://www.typescriptlang.org/",
    icon: <Typescript />,
  },
];
