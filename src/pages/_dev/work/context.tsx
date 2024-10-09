import {
  ChangeEventHandler,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
} from 'react';
import { useLocalStorage } from '@brysonandrew/hooks-dom/useLocalStorage';
import { NOOP } from '@brysonandrew/utils-function';
import { useUpworkParams } from '@pages/_dev/work/item/useUpworkParams';
import {
  HOURLY_DEFAULT,
  ITEMS,
  UPWORK_BASE,
} from '@pages/_dev/work/config/constants';
import {
  TInitIdItem,
  TInitIdItems,
  TUpworkFilterConfig,
} from '@pages/_dev/work/config/types';
import { resolveKey } from '@pages/_dev/work/key';
import { valueToNamePath } from '@pages/_dev/work/forms/value-to-name-path';

export type TCommonState = Required<
  Pick<
    TUpworkFilterConfig,
    'isExpert' | 'isIntermediate' | 'hourly'
  >
> &
  Pick<TUpworkFilterConfig, 'location'>;

type TPathHandlers = {
  params(q: string): string;
  href(params: string): string;
};

export type TWorkStateContext = {
  isQ: boolean;
  q: string;
  commonState: TCommonState;
  items: TInitIdItems;
  reset(): void;
  remove(id: string): void;
  add(item: TInitIdItem): void;
  onCommonStateChange: ChangeEventHandler<HTMLInputElement>;
  onQChange: ChangeEventHandler<HTMLInputElement>;
  onQDelete(): void;
  pathHandlers: TPathHandlers;
};

const pathHandlers: TPathHandlers = {
  params: (_: string) => '',
  href: (_: string) => '',
};
const Q = 'Custom';
const INIT: TWorkStateContext = {
  isQ: Boolean(Q),
  q: Q,
  commonState: {
    hourly: HOURLY_DEFAULT,
    isExpert: true,
    isIntermediate: false,
  },
  items: ITEMS,
  reset: NOOP,
  remove: NOOP,
  add: NOOP,
  onCommonStateChange: NOOP,
  onQChange: NOOP,
  onQDelete: NOOP,
  pathHandlers,
};
export const STATE = createContext<TWorkStateContext>(INIT);

export const useWorkState = (): TWorkStateContext =>
  useContext<TWorkStateContext>(STATE);

export const WorkStateProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [items, setItems] = useLocalStorage<TInitIdItems>(
    resolveKey('items'),
    INIT.items
  );
  const [commonState, setState] =
    useLocalStorage<TCommonState>(
      resolveKey('filters'),
      INIT.commonState
    );
  const reset = () => setItems(ITEMS);
  const remove = (id: string) =>
    setItems((prev) => prev.filter((v) => v.id !== id));
  const add = (item: TInitIdItem) =>
    setItems((prev) => [item, ...prev]);
  const [q, setQ] = useLocalStorage(
    resolveKey('q'),
    INIT.q ?? 'query'
  );

  const handleQChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setQ(event.target.value);
  };

  const handleQDelete = () => {
    setQ('');
  };

  const handleCommonStateChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const namePath = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setState((prev) => {
      valueToNamePath(namePath, value, prev);
      return prev;
    });
  };

  const handler = useUpworkParams(commonState);
  const restParams = handler();
  const resolveParams = (q: string) =>
    q
      ? `q=${q}${restParams ? `&${restParams}` : ''}`
      : restParams;
  const resolveHref = (params: string) => {
    return `${UPWORK_BASE}?${params}`;
  };

  return (
    <STATE.Provider
      value={{
        q,
        isQ: Boolean(q),
        items,
        reset,
        remove,
        add,
        commonState,
        onCommonStateChange: handleCommonStateChange,
        onQChange: handleQChange,
        onQDelete: handleQDelete,
        pathHandlers: {
          params: resolveParams,
          href: resolveHref,
        },
      }}
    >
      {children}
    </STATE.Provider>
  );
};
