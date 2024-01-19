import type {
  TFileComposer,
  TFileComposerSet,
  TFileComposerSetValue,
} from "../common/types/indexer";
import { red, treePrompt } from "../common/utils";

export const visualizeFileComposer = <T = TFileComposerSetValue>(
  fileComposer: TFileComposer<TFileComposerSet<T>>
) =>
  [...fileComposer]
    .map(([file, setter]: [string, TFileComposerSet<T>]) => {
      const visual = `${file}\n${treePrompt({
        items: [...(setter.values() as any)].map((value) =>
          Array.isArray(value) ? value.join("\n") : value
        ),
        highlights: ["import", "from", "./", "../", "/"],
        prefix: red("!"),
      })}`;
      return visual;
    })
    .join("\n\n");

export const treePromptExisting = (files: string[]) =>
  treePrompt({ items: files, highlights: [], prefix: red("!") });
