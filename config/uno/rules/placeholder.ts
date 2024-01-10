import { TTheme } from "@uno/theme";
import { Rule } from "unocss";

export const RULES: Rule<TTheme>[] = [
  ['placeholder', { transform: 'scale(8)' }],
  ['+placeholder', { transform: 'scale(16)' }],
  ['++placeholder', { transform: 'scale(28)' }],
] ;
