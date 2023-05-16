import { Fragment } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useLocation } from "react-router";
import clsx from "clsx";
import { Item } from "./right/Item";

const Root = styled(motion.ul)``;

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <Root
      className={clsx(
        "relative flex flex-col items-center md:flex-row",
      )}
    >
      {["showcase", "contact"].map((item, index) => {
        const to = `/${item}`;
        if (pathname === to) return null;
        return (
          <Fragment key={item}>
            {index !== 0 && (
              <li
                key={`${index}`}
                className="p-0.25 md:p-2"
              />
            )}
            <Item to={to}>{item}</Item>
          </Fragment>
        );
      })}
    </Root>
  );
};
