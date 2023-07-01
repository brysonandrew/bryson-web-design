import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';

export const Showcase = () => {
  return (
    <MainShell>
      <Shell>
        <Main/>
      </Shell>
    </MainShell>
  );
};
