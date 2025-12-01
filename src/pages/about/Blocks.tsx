import { isString } from '@brysonandrew/utils-validation';
import { FC, Fragment } from 'react';

type TProps = {
  children: (string | JSX.Element)[];
};
export const AboutBlocks: FC<TProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-stretch gap-6">
      {children.map((child, index) => {
        if (isString(child))
          return (
            <p className="title-section" key={`${index}`}>
              {child}
            </p>
          );
        return (
          <Fragment key={`${index}`}>{child}</Fragment>
        );
      })}
    </div>
  );
};
