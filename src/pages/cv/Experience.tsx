import { APP_ITEMS } from "@constants/apps";
import { Fragment } from "react";

export const Experience = () => (
    <ul>
      {APP_ITEMS.map((item, index) => (
        <Fragment>
          {index !== 0 && <li className="py-2" />}
          <li key={item.title}>
            <div className="flex items-center justify-between">
              <h4>{item.title}</h4>
              <p>
                {item.description}
              </p>
            </div>
            {item.tags && (
              <>
                <div className="py-1" />
                <p>{item.tags.join(", ")}</p>
              </>
            )}
          </li>
        </Fragment>
      ))}
    </ul>
  );
