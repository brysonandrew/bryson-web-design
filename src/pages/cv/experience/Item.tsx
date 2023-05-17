import type { TItem } from "@t/showcase";

export const Item = (item: TItem) => (
  <li>
    <div className="flex items-center justify-between">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
    {item.tags && (
      <>
        <div className="py-1" />
        <p>{item.tags.join(", ")}</p>
      </>
    )}
  </li>
);
