import OpenAI from 'openai';
import type { ScrapedSite } from './scrape-site';

export type EmailBits = {
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

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ---- OpenAI call (v2.0 engine) ----

export const generateEmailBits = async (
  siteInfo: ScrapedSite,
  fallbackName: string,
): Promise<EmailBits> => {
  const { title, metaDescription, content, emails, url } = siteInfo;

  const systemPrompt = `
You help a senior frontend developer (Andrew Bryson: 9+ years, React/Next.js/Vue/TypeScript, NZ-born, now based in Poland) generate high-value cold outreach to web studios and digital agencies.

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

