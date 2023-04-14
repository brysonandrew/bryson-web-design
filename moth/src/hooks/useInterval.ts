import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { MutableRefObject } from "react";

/**
  useInterval source 
  @see https://gist.github.com/Danziger/336e75b6675223ad805a88c2dfdcfd4a#file-throttled-callback-hook-ts
**/
/**
 * Use setInterval with Hooks in a declarative way.
 *
 * @see https://stackoverflow.com/a/59274004/3723993
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export function useInterval(
  callback: () => Promise<void | null> | void,
  delay: number | null,
): MutableRefObject<number | null> {
  const intervalRef = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval:

  useEffect(() => {
    if (typeof delay === "number") {
      callbackRef.current();
      intervalRef.current = window.setInterval(
        () => callbackRef.current(),
        delay,
      );

      // Clear interval if the components is unmounted or the delay changes:
      return () =>
        window.clearInterval(intervalRef.current || 0);
    }
  }, [delay]);

  // In case you want to manually clear the interval from the consuming component...:
  return intervalRef;
}

/*
  useTimeout is taken and modified from:
  https://usehooks-ts.com/react-hook/use-timeout
*/
type TTimeoutRef = MutableRefObject<ReturnType<
  typeof setTimeout
> | null>;
export const useTimeout = (
  callback: () => void,
  delay: number | null,
): TTimeoutRef => {
  const savedCallback = useRef(callback);
  const timeout: TTimeoutRef = useRef(null);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (typeof delay !== "number") {
      return;
    }

    timeout.current = setTimeout(
      () => savedCallback.current(),
      delay,
    );

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [delay]);
  return timeout;
};

/*
  useDelayedCallback is taken and modified from the hook useTimeout from:
  https://usehooks-ts.com/react-hook/use-timeout
*/
export const useDelayedCallback = (
  callback: (...args: any) => void,
  delay: number | null,
) => {
  const timeoutRef: MutableRefObject<ReturnType<
    typeof setTimeout
  > | null> = useRef(null);

  useEffect(() => {
    const timeoutId = timeoutRef.current;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return () => {
    if (typeof delay !== "number") {
      return;
    }
    timeoutRef.current = setTimeout(callback, delay);
  };
};

type TTimeUnitValues = [
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number,
];

const TIME_UNITS = ["hour", "minute", "second"] as const;
type TTimeUnit = (typeof TIME_UNITS)[number];

export const msToTime = (
  duration: number,
): TTimeUnitValues => {
  const milliseconds = Math.floor((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? 0 + hours : hours;
  minutes = minutes < 10 ? 0 + minutes : minutes;
  seconds = seconds < 10 ? 0 + seconds : seconds;

  return [hours, minutes, seconds, milliseconds];
};

export const resolveText = (
  n: number | null,
  timeUnit: TTimeUnit,
): string =>
  n ? `${n} ${timeUnit}${n === 1 ? "" : "s"}` : "";

type TReturn = { result: string; updateInterval: number };
type TUnitsRecord = Record<TTimeUnit, number>;
const COMMA_DELIMITER = ", ";
export const resolveHoursMinsSecondsHumanReadable = (
  [h, m, s]: TTimeUnitValues,
  isShort?: boolean,
): TReturn => {
  let result = "";
  if (h) {
    result += resolveText(h, "hour");
    if (isShort) {
      return { result, updateInterval: 1000 * 60 * 60 };
    }
  }
  if (m) {
    const delimiter = Boolean(result)
      ? COMMA_DELIMITER
      : "";
    result += delimiter + resolveText(m, "minute");

    if (isShort) {
      return { result, updateInterval: 1000 * 60 };
    }
  }
  if (s) {
    const delimiter = Boolean(result) ? " and " : "";

    result += delimiter + resolveText(s, "second");

    if (isShort) {
      return { result, updateInterval: 1000 };
    }
  }

  return { result, updateInterval: 1000 };
};

export const timeNow = () => new Date().getTime();

export type THumanReadableTimePassedConfig = {
  initTimeOriginMs?: number;
  isShort?: boolean;
};
export const useHumanReadableTimePassed = ({
  initTimeOriginMs,
  isShort,
}: THumanReadableTimePassedConfig): [
  string,
  (timeOrigin: number) => void,
] => {
  const [timeOrigin, setTimeOrigin] = useState(
    initTimeOriginMs ?? 0,
  );
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    setTimePassed(Math.abs(timeNow() - timeOrigin));
  }, [timeOrigin]);

  const hoursMinsSeconds = useCallback(
    () => msToTime(timePassed),
    [timePassed],
  );
  const hms = hoursMinsSeconds();

  const { result, updateInterval } =
    resolveHoursMinsSecondsHumanReadable(hms, isShort);

  useInterval(() => {
    setTimePassed(Math.abs(timeNow() - timeOrigin));
  }, updateInterval);

  return [result, setTimeOrigin];
};
