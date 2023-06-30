import { Shell } from "@moth-components/shell";
import { Main } from "./main";
import { useMothContext } from "@moth-state/Context";
import { Start } from "./start";
import { useStyles } from "@css/useStyles";

export const Index = () => {
  const { start } = useMothContext();
  useStyles();

  return (
    <>
      {start ? (
        <Shell>
          <Main />
        </Shell>
      ) : (
        <Start />
      )} 
    </>
  );
};
