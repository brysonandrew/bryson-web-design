import { treePrompt, inverse, red } from "../console";
import { yesNo } from "../console/interactive";
import type { TTreePromptConfig } from "../console/prompts";
import { deleteEntries } from "../entries/delete";

export const deleteEntryPaths = async (
  cwd: string,
  entryPaths: string[],
  highlights?: string[],
  onDone?: () => void
) =>
  entriesTempate({
    cwd,
    entries: entryPaths.map((entryPath) => [entryPath]),
    type: ETemplate.Delete,
    treePromptConfig: { items: entryPaths, highlights, prefix: red("×") },
    operation: (allDone) =>
      allDone
        ? deleteEntries(cwd, entryPaths, () => {
            allDone();
            if (onDone) {
              onDone();
            }
          })
        : onDone
        ? onDone()
        : null,
  });

export enum ETemplate {
  Add = "Add",
  Delete = "Delete",
}
export const VERB_LOOKUP = {
  [ETemplate.Add]: "Adding",
  [ETemplate.Delete]: "Deleting",
};
type TTemplateConfig = {
  cwd: string;
  type: ETemplate;
  entries: [path: string, content?: string][];
  treePromptConfig: TTreePromptConfig;
  operation(callback: (() => void) | false): void;
};

export const entriesTempate = async ({ type, treePromptConfig, operation }: TTemplateConfig) => {
  const entryPaths = treePromptConfig.items;
  if (entryPaths.length) {
    await yesNo({
      title: inverse(`${type} the following?`),
      content: treePrompt(treePromptConfig),
      ifNo: () => {
        console.log(`\n${VERB_LOOKUP[type]} cancelled\n`);
        operation(false);
      },
      ifYes: () => {
        console.log(`\n${VERB_LOOKUP[type]} entries...\n`);
        const allDone = () => {
          console.log(`\n${VERB_LOOKUP[type]} complete\n`);
        };
        operation(allDone);
      },
    });
  } else {
    operation(false);
    console.log(`\n${inverse(" No entries found. ")}\n`);
  }
};
