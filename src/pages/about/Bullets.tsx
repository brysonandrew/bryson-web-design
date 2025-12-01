import { FC } from 'react';

type TProps = {
  title?: string;
  children: (string | JSX.Element)[];
};
export const AboutBullets: FC<TProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col items-stretch gap-2">
      {title && <h4>{title}</h4>}
      <ul className="flex flex-col items-stretch gap-2 list-inside list-disc">
        {children.map((child, index) => {
          return (
            <li className="title-section" key={`${index}`}>
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
