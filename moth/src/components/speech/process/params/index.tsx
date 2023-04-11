import { useState, Fragment } from "react";
import type { ChangeEvent, FC } from "react";
import clsx from "clsx";
import { useParams } from "../useParams";
import { Item } from "./Item";
import type { TParam, TNode } from "../config";
import { Slider } from "@moth-components/inputs";

type TEntry = [string, TParam];
export type TParamsProps = Omit<TNode, "name">;
export const Params: FC<TParamsProps> = ({
  node,
  paramRecord: initParamRecord,
  gain: initGain,
  gainNode,
}) => {
  const [gain, setGain] = useState(initGain);
  const [paramRecord, setParams] =
    useState(initParamRecord);
  const handleParams = useParams();

  const update = ({
    currentTarget: { name, value },
  }:
    | ChangeEvent<HTMLInputElement>
    | ChangeEvent<HTMLSelectElement>) => {
    const nextValue = +value;
    const next = {
      ...paramRecord,
      [name]: {
        ...paramRecord[name],
        value: nextValue,
      },
    };
    handleParams({
      node,
      paramRecord: next,
    });
    setParams(next);
  };

  const handleChange = update;

  const handleGainChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    gainNode.gain.value = +value;
    setGain(+value);
  };
  return (
    <ul>
      <li className="flex flex-col w-full">
        <div className="flex justify-between">
          <div>gain</div>
          <div>{gain}</div>
        </div>
        <div className="py-1" />
        <div
          className={clsx(
            "flex relative shadow-purple h-2 w-full",
          )}
        >
          <Slider
            name="gain"
            value={gain}
            onChange={handleGainChange}
            min="0"
            step="0.01"
            max="10"
          />
        </div>
      </li>
      <li className="py-1" />
      <li className="flex w-full">
        <ul className="flex flex-col w-full">
          {(Object.entries(paramRecord) as TEntry[]).map(
            ([key, sliderProps]: TEntry, index) => (
              <Fragment key={key}>
                {index !== 0 && <li className="py-1" />}
                <Item
                  name={key}
                  onChange={handleChange}
                  {...sliderProps}
                />
              </Fragment>
            )
          )}
        </ul>
      </li>
    </ul>
  );
};
