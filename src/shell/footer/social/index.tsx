import type { FC } from 'react';
import { I } from '@brysonandrew/icons-i';
import {
  GITHUB_ICON,
  LINKEDIN_ICON,
} from '@brysonandrew/icons-keys/social';
import { Anchor } from '@brysonandrew/interactive';

export const ShellFooterSocial: FC = () => {
  return (
    <ul className="column gap-6 lg:row lg:gap-4">
      <li>
        <Anchor
          title="Github"
          href="https://github.com/brysonandrew"
        >
          <I icon={GITHUB_ICON} />
        </Anchor>
      </li>
      <li>
        <Anchor
          title="LinkedIn"
          href="https://www.linkedin.com/in/brysona"
        >
          <I icon={LINKEDIN_ICON} />
        </Anchor>
      </li>
    </ul>
  );
};
