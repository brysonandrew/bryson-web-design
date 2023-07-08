import { TChildren } from '@t/index';
import { useInView } from 'framer-motion';
import {
  createElement,
  useRef,
  ReactHTML,
  HTMLProps,
  MutableRefObject,
  useState,
  useEffect,
} from 'react';
type TInViewParameters = Parameters<typeof useInView>;
export type TInViewOptions = TInViewParameters[1];
export type TRect =
  | DOMRect
  | Pick<DOMRect, 'height' | 'top'>;

type TType = keyof ReactHTML;
export type TUpdateRectProps = {
  rect: TRect;
  onUpdateRect(): void;
};
type TChildrenProps<T> = TUpdateRectProps & {
  isInView: boolean;
  ref: MutableRefObject<T | null>;
};
type TProps<T> = Omit<HTMLProps<T>, 'children'> &
  TInViewOptions & {
    type?: TType;
    children(props: TChildrenProps<T>): TChildren;
  };
export const InView = <T extends HTMLElement>({
  type = 'div',
  children,
  root,
  margin,
  once,
  amount,
  ...props
}: TProps<T>) => {
  const ref = useRef<T | null>(null);
  const [rect, setRect] = useState<TRect>({
    height: 1000,
    top: 1000,
  });

  const onUpdateRect = () => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  };

  useEffect(onUpdateRect, []);

  const isInView = useInView(ref, {
    root,
    margin,
    amount,
    once,
  });

  return createElement(
    type,
    { ref, ...props },
    children({
      isInView,
      ref,
      rect,
      onUpdateRect,
    }),
  );
};
