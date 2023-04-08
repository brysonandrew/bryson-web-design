import styled from "@emotion/styled";
import type { TModule } from "@t/index";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const pages = import.meta.glob<TModule>("./**/*");

const Root = styled.div``;

export const Workshop = () => (
  <Root className="w-screen h-screen px-4 py-4">
    workshop
    <div className="py-1" />
    <ul>
      {Object.entries(pages).map(([key], index) => {
        const name = key.split("/")?.[1];
        const to = `/workshop/${name}`;
        return (
          <Fragment key={key}>
            {index !== 0 && <li className="py-1" />}
            <li className="relative px-2 py-1">
              <Link to={to}>{name}</Link>
            </li>
          </Fragment>
        );
      })}
    </ul>
  </Root>
);
