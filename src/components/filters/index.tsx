import { FilterShell } from './FilterShell';
import { Filter as Aura, AURA_ID } from './aura/Filter';

export const Filters = () => {
  return (
    <FilterShell>
      <Aura id={AURA_ID} intensity={10} />
    </FilterShell>
  );
};
