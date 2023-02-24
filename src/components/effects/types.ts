import { TChildren } from "@t/index";

export type TFilterChildrenProps<T extends string> = {
  children?(id: T): TChildren;
  external?(id: T): TChildren;

};