import type { FC } from "react";

type TProps = {
  title: string;
  text: string;
};
export const Item: FC<TProps> = ({ title, text }) => (
    <li className="flex">
      <h4 className="text-teal whitespace-nowrap">{title}</h4>
      <div className="p-1" />
      <p className="text-teal-bright">{text}</p>
    </li>
  );
