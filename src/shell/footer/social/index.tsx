import type { FC } from 'react';
import { I } from '@brysonandrew/icons-i';
import { GITHUB_ICON, LINKEDIN_ICON } from '@brysonandrew/icons-keys/social';
import { Anchor } from '@brysonandrew/interactive';

export const ShellFooterSocial: FC = () => {
  return (
    <ul className="relative column gap-6 -left-4 lg:(row h-0 bg-red bottom-4)">
      {[
        ['Github', 'https://github.com/brysonandrew', GITHUB_ICON],
        ['LinkedIn', 'https://www.linkedin.com/in/brysona', LINKEDIN_ICON],
      ].map(([title, href, icon]) => (
        <li key={title}>
          <Anchor
            title={title}
            href={href}
            classValue="hover:text-accent text-2xl lg:text-base"
            target='_blank'
          >
            <I icon={icon} />
          </Anchor>
        </li>
      ))}
    </ul>
  );
};
