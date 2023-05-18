import { useStyles } from "@styles/useStyles";
import { ChangeEvent, FC, useState } from "react";

type TProps = {
  children(invert: string): void;
};
export const Invert: FC<TProps> = ({ children }) => {
  const [invert, setInvert] = useState(0);

  useStyles();
  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInvert(+value);
  };

  return (
    <>
      {children(`invert(${invert}%)`)}
      <label className="flex items-center px-2 py-1 w-24">
        <input
          value={invert}
          min="0"
          max="100"
          step="1"
          type="range"
          onChange={handleChange}
        />
        <div className="p-1" />
        <div>{invert}%</div>
      </label>
    </>
  );
};
