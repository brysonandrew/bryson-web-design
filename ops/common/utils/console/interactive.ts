import readline from "node:readline";
import { stdin as input, stdout as output } from "process";
import { inverse } from "./styles";
const lineInterface = readline.createInterface({
  input,
  output,
});

type TYesNoConfig = {
  title: string;
  content: string;
  ifYes: () => void;
  ifNo: () => void;
};
export const yesNo = async ({ title, content, ifYes, ifNo }: TYesNoConfig) => {
  const message = `\n${title}\n\n${content}\n\n${inverse(" [ y / n ]? \n")}`;
  lineInterface.question(message, (reply: string) => {
    if (reply === "y") {
      ifYes();
    } else {
      ifNo();
    }
  });
};
