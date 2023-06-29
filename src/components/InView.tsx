import { TChildren } from '@t/index';
import { useInView } from 'framer-motion';
import {
  createElement,
  useRef,
  ReactHTML,
  HTMLProps,
} from 'react';
type TInViewParameters = Parameters<typeof useInView>;

type TType = keyof ReactHTML;
type TProps<T> = Omit<HTMLProps<T>, 'children'> &
  TInViewParameters[1] & {
    type?: TType;
    children(isInView: boolean): TChildren;
  };
export const InView = <
  T extends HTMLElement = HTMLDivElement,
>({
  type = 'div',
  children,
  root,
  margin,
  once,
  amount,
  ...props
}: TProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    root,
    margin,
    amount,
    once,
  });
  return createElement(
    type,
    { ref, ...props },
    children(isInView),
  );
};
