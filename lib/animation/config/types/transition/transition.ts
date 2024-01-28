import {
  Inertia,
  Keyframes,
  None,
  Spring,
  Tween,
  Orchestration,
} from 'framer-motion';

type PermissiveTransitionDefinition = {
  [key: string]: any;
};
export type TWhen =
  | false
  | 'beforeChildren'
  | 'afterChildren'
  | string;
type TJust = {
  type: 'just';
};

export type TTransition =
  | Tween
  | Spring
  | Keyframes
  | Inertia
  | TJust
  | None
  | PermissiveTransitionDefinition;

export type TAllTransitionProps = Orchestration &
  TTransition & {
    [key: string]: TTransition;
  } & {
    when: TWhen;
  };

export type TTransitionProps = Partial<TAllTransitionProps>;

export type TTransitionConfig = TTransition;
export type TTransitionConfigs =
  readonly TTransitionConfig[];
