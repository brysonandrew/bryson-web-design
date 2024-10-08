import { FC, useState } from 'react';
import { TUpworkFilterConfig } from '@pages/_dev/work/config/types';
import { WorkItem } from '@pages/_dev/work/item';
import { TextInput } from '@_workshop/reader/components/Inputs';

type TProps = TUpworkFilterConfig;
export const WorkItemCustom: FC<TProps> = (config) => {
  const [q, setQ] = useState(config.q ?? 'query');
  return (
    <ul>
      <li>
        <TextInput
          name="q"
          value={q}
          onChange={(event) => {
            setQ(event.target.value);
          }}
        />
      </li>
      <WorkItem {...config} q={q} />
    </ul>
  );
};
