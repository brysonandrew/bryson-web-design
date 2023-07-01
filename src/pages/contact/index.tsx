import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';

export const Contact = () => {
  return (
    <MainShell>
      <Shell>
        <Main />
      </Shell>
    </MainShell>
  );
};
