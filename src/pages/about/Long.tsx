import { ThinLineGrow } from '@brysonandrew/layout';
import { useIntoViewOnMount } from '@hooks/into-view-on-mount';
import { AboutBlocks } from '@pages/about/Blocks';
import { AboutBullets } from '@pages/about/Bullets';
import { AboutTitle } from '@pages/about/Title';
import type { FC } from 'react';

export const AboutLong: FC = () => {
  const ref = useIntoViewOnMount<HTMLHRElement>({
    block: 'start',
  });

  return (
    <>
      <div ref={ref} className="w-full">
        <ThinLineGrow />
      </div>
      <AboutTitle>What I do</AboutTitle>
      <AboutBlocks>
        {[
          `I design and build front-end experiences
          that feel fast, intuitive, and polished.`,
          <AboutBullets key="0" title="My work spans:">
            {[
              'React / Next.js applications',
              'Vue / Nuxt applications',
              'API-driven and headless CMS setups',
              'High-performance, SEO-optimised websites',
              'UI/UX for interactive and media-rich apps',
              'Advanced animations (Framer Motion, GSAP, scroll-based, micro-interactions)',
              'AI-powered interfaces for creative, productivity, and automation tools',
            ]}
          </AboutBullets>,
          `I focus on performance, maintainability, and
          long-term scalability — writing clean code that your
          team can build on.`,
        ]}
      </AboutBlocks>

      <ThinLineGrow />

      <AboutTitle>How I work</AboutTitle>

      <AboutBlocks>
        {[
          `My approach is simple: communicate clearly, deliver reliably, and respect
          your time.`,
          <AboutBullets key="0">
            {[
              'I provide realistic estimates',
              'I share progress early and often',
              'I solve problems collaboratively',
              'I keep codebases tidy, consistent, and documented',
              'I take ownership of the work from start to finish',
            ]}
          </AboutBullets>,
          `I treat every project like a partnership, not a
          handoff.
          `,
        ]}
      </AboutBlocks>

      <ThinLineGrow />

      <AboutTitle>Who I work with</AboutTitle>

      <AboutBlocks>
        {[
          <AboutBullets
            key="0"
            title="I’ve collaborated with:"
          >
            {[
              'digital agencies',
              'SaaS companies',
              'creative studios',
              'e-commerce teams',
              'startups and founders',
            ]}
          </AboutBullets>,
          `…across New Zealand, Australia, Europe, and North
          America — often bridging multiple time zones.
          `,
          `Whether you need a single front-end feature, a
          complete web application, or ongoing support, I can
          integrate smoothly with your team and deliver work
          you can trust.
          `,
        ]}
      </AboutBlocks>

      <ThinLineGrow />

      <AboutTitle>A bit more about me</AboutTitle>

      <AboutBlocks>
        {[
          `I’m originally from New Zealand, now based in
          Poland, working primarily with clients in Europe,
          Australia, and North America.`,
          `Outside of development, I spend my time creating
          AI-driven projects, audio tools, and music — often
          combining technology and creativity in unique ways.`,
        ]}
      </AboutBlocks>

      <ThinLineGrow />

      <AboutTitle>Let’s work together</AboutTitle>

      <AboutBlocks>
        {[
          `If you need a senior front-end developer who values
          clarity, quality, and reliability, I’d be happy to
          help.`,
          `You can reach me anytime through my contact form —
          or connect via email if you prefer.`,
        ]}
      </AboutBlocks>
    </>
  );
};
