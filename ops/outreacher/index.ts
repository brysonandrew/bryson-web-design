import 'dotenv/config';
import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import { load } from 'cheerio';
import OpenAI from 'openai';
import cors from 'cors';
import dns from 'node:dns';
import { handleSearchBusinesses } from '@ops/outreacher/businesses';

dns.setDefaultResultOrder('ipv4first');

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
  }),
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ---- Types ----

type ScrapedSite = {
  url: string;
  title: string;
  metaDescription: string;
  content: string;
  emails: string[];
};

type EmailBits = {
  name: string;
  subject: string;
  cta: string;
  offer: string;
  insights: string[];
  opportunities: string[];
  microFix: string;
  leadScore: number;
  leadReason: string;
  followUps: string[];
  demoIdea: string;
};

type BuiltEmail = {
  subject: string;
  body: string;
};

type GenerateEmailRequestBody = {
  url: string;
  fallbackName?: string;
};

// ---- URL normaliser ----

const normalizeUrl = (rawUrl: string): string => {
  let url = rawUrl.trim();

  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  url = url.replace(/^http:\/\//i, 'https://');
  url = url.replace(/\/+$/, '');

  return url;
};

// ---- Scraper ----

const scrapeSite = async (url: string): Promise<ScrapedSite> => {
  const normalizedUrl = normalizeUrl(url);

  const res = await fetch(normalizedUrl, { timeout: 15000 as any });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${normalizedUrl}: ${res.status}`);
  }

  const html = await res.text();
  const $ = load(html);

  const title = $('title').first().text() || '';
  const metaDescription =
    $('meta[name="description"]').attr('content') || '';

  const selectors = [
    'h1',
    'h2',
    'h3',
    'header',
    'main',
    'section',
    'footer',
    '.hero',
    '.about',
    '.services',
    '.clients',
  ];

  let chunks: string[] = [];

  selectors.forEach((sel) => {
    $(sel).each((_, el) => {
      const text = $(el).text().replace(/\s+/g, ' ').trim();
      if (text && text.length > 40) {
        chunks.push(text);
      }
    });
  });

  // dedupe text chunks
  chunks = Array.from(new Set(chunks));

  const combined = chunks.join('\n\n').slice(0, 5000);

  // ---- Email scraping ----
  const emailSet = new Set<string>();

  // 1) mailto: links
  $('a[href^="mailto:"]').each((_, el) => {
    const href = $(el).attr('href') || '';
    const email = href.replace(/^mailto:/i, '').split('?')[0].trim();
    if (email) {
      emailSet.add(email.toLowerCase());
    }
  });

  // 2) regex over raw HTML
  const emailRegex =
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;

  let match: RegExpExecArray | null;
  while ((match = emailRegex.exec(html)) !== null) {
    const email = match[0].toLowerCase();
    emailSet.add(email);
  }

  // Basic filtering
  const emails = Array.from(emailSet).filter((email) => {
    if (email.includes('noreply') || email.includes('no-reply')) return false;
    if (email.includes('example.com') || email.includes('localhost')) return false;
    return true;
  });

  return {
    url: normalizedUrl,
    title,
    metaDescription,
    content: combined,
    emails,
  };
};

// ---- OpenAI call (v2.0 engine) ----

const generateEmailBits = async (
  siteInfo: ScrapedSite,
  fallbackName: string,
): Promise<EmailBits> => {
  const { title, metaDescription, content, emails, url } = siteInfo;

  const systemPrompt = `
You help a senior frontend developer (Andrew Bryson: 9+ years, React/Next.js/Vue/TypeScript, based in North Vancouver, Vancouver, Canada) generate high-value cold outreach to web studios and digital agencies.

You will receive:
- basic site metadata
- extracted text content
- any contact emails we could find
- the site's URL

From this, you must infer and return a JSON object with:

- "name": string
    The most likely first name of the owner/decision-maker, if you can infer it.
    If not, use a team-style name such as "the [Studio Name] team" or the provided fallback.
- "subject": string
    A concise, professional subject line (<= 60 characters) that:
      - clearly signals frontend / React / Next.js / UI help or extra capacity
      - feels tailored to their context (niche, stack, WordPress, design focus, etc.)
      - avoids generic fluff like "regarding your services" or "introduction".
- "cta": string
    A single tight paragraph (2–3 sentences, max ~80 words) that:
      - references something specific from their website (tech stack, services, clientele, style, niche, WordPress focus, etc.)
      - clearly positions Andrew as external senior frontend support for busy agencies
      - uses confident, direct language (not apologetic, not "if you are open to...")
      - ends with a clear CTA such as "Happy to share a couple of relevant projects or jump on a quick call."
- "offer": string
    A small, productised offer that feels low-friction for an agency to try.
    Examples: "I can help with React/Next.js sections inside your WordPress builds" or
    "I can refine hero animations and key UI components for your next few client launches."
- "insights": string[]
    1–3 short observations about their site or positioning.
    These should be specific, concrete, and plausible (visual style, performance hints, positioning, tech, etc.).
- "opportunities": string[]
    1–3 short statements of where Andrew could help them (overflow work, hybrid WP+React, better animations, performance, etc.).
- "microFix": string
    One small improvement they could make (preferably frontend/UI/performance oriented) that could reasonably be inferred from a typical agency/studio site.
    Keep it short and practical.
- "leadScore": number
    A number from 0 to 100 indicating how strong of a prospect this agency is for Andrew,
    based on:
      - match with React/Next.js/Vue/TypeScript
      - signs they build WordPress or custom sites
      - signs they are active and busy
      - whether they likely use freelancers/contractors.
- "leadReason": string
    One or two sentences explaining why you chose that leadScore.
- "followUps": string[]
    3 follow-up lines or short emails (1–3 sentences each) that:
      - never say "just following up"
      - add small bits of value (refer to an insight, microFix, or offer)
      - stay friendly and low-pressure
      - can be sent as separate follow-up emails.
- "demoIdea": string
    A suggestion for a tiny demo Andrew could create JUST for this agency
    (e.g. a refined hero animation, a better services grid, a Framer Motion prototype, etc.).

Rules:
- Tone: professional, confident, friendly. No hype, no emojis, no exclamation marks.
- Avoid repeating long tech lists; mention technologies only if they help specificity.
- Do NOT mention references, portfolio links, videos, or exact years of experience — those are handled in Andrew's base template.
- Do NOT talk about being "honoured" or "excited"; keep it grounded and practical.
- Assume the recipient is busy and skims emails; keep wording simple and concrete.
- If info is missing or unclear, make reasonable, agency-friendly assumptions rather than returning "N/A".
- Respond ONLY as valid JSON with this exact shape:
  {
    "name": string,
    "subject": string,
    "cta": string,
    "offer": string,
    "insights": string[],
    "opportunities": string[],
    "microFix": string,
    "leadScore": number,
    "leadReason": string,
    "followUps": string[],
    "demoIdea": string
  }.
`.trim();

  const userPrompt = `
Website info:
URL: ${url}
Title: ${title || 'N/A'}
Meta description: ${metaDescription || 'N/A'}

Possible contact emails found:
${emails.length ? emails.join(', ') : 'None found'}

Extracted content:
"""
${content || 'N/A'}
"""

Fallback name to use if you really can't infer a specific person:
"${fallbackName}"
`.trim();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.7,
  });

  const raw = completion.choices[0].message.content?.trim() ?? '';

  let parsed: EmailBits;
  try {
    parsed = JSON.parse(raw) as EmailBits;
  } catch (err) {
    console.error('Failed to parse JSON from model:', raw);
    throw new Error('Model returned invalid JSON');
  }

  return parsed;
};

// ---- Build final email with your template ----

const buildEmail = (bits: EmailBits): BuiltEmail => {
  const { name, subject, cta, offer, demoIdea } = bits;

  const safeName = name || 'there';

  const subjectLine =
    subject || `Frontend web developer support available for ${safeName}`;

  const body = `Hi ${safeName},

I’m a frontend web developer based in North Vancouver, Vancouver, Canada, with 9+ years of experience building React, Next.js, and Vue interfaces in TypeScript.

${cta}

${offer ? `${offer}\n` : ''}${
    demoIdea
      ? `If it helps, I'm happy to put together a small demo along these lines: ${demoIdea}\n`
      : ''
  }References available. I can send a couple of recent projects, or we can jump on a quick call if that’s easier.

Kind regards,
Andrew Bryson
brysona.dev | github.com/brysonandrew | linkedin.com/in/brysona

14-second intro → https://brysona.dev/video
`;

  return { subject: subjectLine, body };
};

// ---- Routes ----

app.post('/api/businesses/search', handleSearchBusinesses);

app.post(
  '/generate-email',
  async (
    req: Request<unknown, unknown, GenerateEmailRequestBody>,
    res: Response,
  ) => {
    try {
      const { url, fallbackName = 'your team' } = req.body || {};

      if (!url) {
        return res
          .status(400)
          .json({ error: 'Missing "url" in body' });
      }

      let siteInfo: ScrapedSite;
      try {
        siteInfo = await scrapeSite(url);
      } catch (scrapeErr: any) {
        console.error('Scrape error:', scrapeErr);
        return res.status(502).json({
          error: 'Failed to fetch or parse the website',
          details: scrapeErr?.message,
          code: scrapeErr?.code,
          type: scrapeErr?.type,
        });
      }

      const aiBits = await generateEmailBits(siteInfo, fallbackName);
      const fullEmail = buildEmail(aiBits);

      return res.json({
        url,
        normalizedUrl: siteInfo.url,
        name: aiBits.name,
        subject: fullEmail.subject,
        cta: aiBits.cta,
        body: fullEmail.body,
        offer: aiBits.offer,
        insights: aiBits.insights,
        opportunities: aiBits.opportunities,
        microFix: aiBits.microFix,
        leadScore: aiBits.leadScore,
        leadReason: aiBits.leadReason,
        followUps: aiBits.followUps,
        demoIdea: aiBits.demoIdea,
        contactEmails: siteInfo.emails,
        debug: {
          siteTitle: siteInfo.title,
          metaDescription: siteInfo.metaDescription,
        },
      });
    } catch (err: any) {
      console.error('Error in /generate-email:', err);
      return res.status(500).json({
        error: err?.message ?? 'Internal server error',
        code: err?.code,
        type: err?.type,
      });
    }
  },
);

// ---- Start server ----

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});