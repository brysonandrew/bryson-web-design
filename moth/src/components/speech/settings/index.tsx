import type { ChangeEvent, FC } from "react";
import clsx from "clsx";
import type { TEntry, TSpeechState } from "./config";
import {
  SLIDER_ATTRIBUTES,
  LANG_KEY_NAME,
  VOICE_KEY_NAME,
} from "./config";
import { Slider } from "@moth-components/inputs";
import { Textarea } from "@moth-components/inputs/Textarea";
import { Select } from "@moth-components/inputs/Select";
import { LG_H } from "@moth-constants/styles";

type TProps = {
  state: TSpeechState;
  update(
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >,
  ): void;
};
export const Settings: FC<TProps> = ({ state, update }) => {
  const {
    isPaused,
    isPlaying,
    isPending,
    voiceKey,
    voices,
    langs,
    langKey,
    text,
    activeVoices,
    ...rest
  } = state;

  const handleTextareaChange = update;
  const handleSelectChange = update;
  const handleNumberChange = update;

  return (
    <ul>
      <li>
        <Textarea
          classValue="text-2xl bg-red-02 shadow-red-08-sm p-1"
          name="text"
          value={text}
          disabled={isPlaying}
          onChange={handleTextareaChange}
        />
      </li>
      <li className="p-4" />
      <li className="flex">
        <Select
          classValue="shadow-red-04-sm flex-1"
          name={VOICE_KEY_NAME}
          value={voiceKey ?? ""}
          onChange={handleSelectChange}
          disabled={isPlaying}
          options={activeVoices}
        />
        <div className="p-1" />
        <Select
          classValue="shadow-red-04-sm flex-initial w-24"
          name={LANG_KEY_NAME}
          value={langKey ?? "all"}
          onChange={handleSelectChange}
          disabled={isPlaying}
          options={["all", ...langs]}
        />
      </li>
      <li className="p-1" />
      {(Object.entries(rest) as TEntry[]).map(
        ([key, value]: TEntry) => (
          <li
            key={key}
            className={clsx([isPlaying && "brightness-50"])}
          >
            <div className="flex items-center justify-between">
              <div>{key}</div>
              <div className="p-1" />
              <div>{value}</div>
            </div>
            <Slider
              name={key}
              className={clsx("bg-red-02", LG_H, "w-full")}
              value={value}
              onChange={handleNumberChange}
              {...(SLIDER_ATTRIBUTES[key] ?? {})}
            />
          </li>
        ),
      )}
    </ul>
  );
};
