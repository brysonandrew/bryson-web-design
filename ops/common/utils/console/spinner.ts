import readline from "node:readline";

const spinner = () => {
  let index = 0;
  const interval = setInterval(() => {
    const frames = ["|", "\\", "-", "/"];
    const frame = frames[index];
    process.stdout.write(frame);
    readline.cursorTo(process.stdout, 0, 0);
    index++;
  }, 100);
  clearInterval(interval);
};
