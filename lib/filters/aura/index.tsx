import { FilterShell } from '../FilterShell';
import { Filter, AURA_ID } from './Filter';

export const Aura = () => (
  <FilterShell>
    <Filter id={AURA_ID} intensity={10} />
  </FilterShell>
);
