import { Sub } from "@components/Sub";
import styled from "@emotion/styled";
import { Fragment } from "react";
import type { TItem } from "./constants";
import { ITEMS } from "./constants";
import { Content } from "./Content";
import { Item } from "./Item";

export const Timeline = () => (
  <>
    <Sub>Recent projects - </Sub>
    <div className="py-2" />
    <ul>
      {ITEMS.map((item: TItem, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && <li className="py-2" />}
          <Item>
            <Content {...item} />
          </Item>
        </Fragment>
      ))}
    </ul>
  </>
);
