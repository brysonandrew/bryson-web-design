import { ChangeEventHandler, FC, useState } from 'react';
import { TUpworkFilterConfig } from '@pages/_dev/work/config/types';

type TState = Required<
  Pick<TUpworkFilterConfig, 'isExpert' | 'isIntermediate'>
>;
type TProps = {
  children(state: TState): JSX.Element;
};
export const WorkExperience: FC<TProps> = ({
  children,
}) => {
  const [state, setState] = useState<TState>({
    isExpert: true,
    isIntermediate: false,
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const partial = {
      [event.target.name]: event.target.checked,
    };
    setState((prev) => ({
      ...prev,
      ...partial,
    }));
  };

  return (
    <div>
      <div className="column-start">
        {(
          [
            ['intermediate', 'isIntermediate'],
            ['expert', 'isExpert'],
          ] as const
        ).map(([label, key]) => (
          <label className="row gap-2" key={key}>
            <input
              name={key}
              checked={state[key]}
              type="checkbox"
              onChange={handleChange}
            />
            <h3 className="capitalize">{label}</h3>
          </label>
        ))}
      </div>
      <div className="py-2" />
      {children(state)}
    </div>
  );
};
