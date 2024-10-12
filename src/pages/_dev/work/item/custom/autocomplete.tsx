import type { FC } from 'react';
import { INUT_NAME_Q } from '@pages/_dev/work/item/custom/edit';
import { KEYWORDS_AND_PHRASES_UNIQUE } from '@app/gallery/items';

export const WorkItemCustomAutocomplete: FC = () => {
  return (
    <datalist id={INUT_NAME_Q}>
      {KEYWORDS_AND_PHRASES_UNIQUE.map((keyword) => {
        return <option key={keyword} value={keyword} />;
      })}
      <option value="C++" />
      <option value="Java" />
      <option value="Ruby" />
      <option value="Python" />
      <option value="Go" />
      <option value="Perl" />
      <option value="Erlang" />
    </datalist>
  );
};
