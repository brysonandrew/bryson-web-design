import { TService } from "@pages/services/config/types";

export const SERVICES: TService[] = [
  {
    id: "react-next",
    title: "React & Next.js Development",
    short: "Modern React/Next.js apps with clean TypeScript architecture.",
    full:
      "Fast, modern interfaces built with the latest React and Next.js features. Ideal for SaaS products, dashboards, and marketing sites that need performance and reliability.",
    bullets: [
      "Next.js apps (SSR, ISR, SSG)",
      "TypeScript-first architecture & clean component design",
      "Dashboard UIs, workflows, and interactive features",
      "API integrations (REST/GraphQL)",
      "Performance optimisation & Core Web Vitals",
      "Migrations from older React codebases"
    ]
  },

  {
    id: "vue-nuxt",
    title: "Vue & Nuxt Development",
    short: "Elegant Vue 3 / Nuxt 3 builds for robust front-ends.",
    full:
      "Robust, elegant front-end builds powered by Vue 3 and Nuxt 3, with a focus on maintainability and long-term scalability.",
    bullets: [
      "Nuxt apps (SPA, SSR, SSG)",
      "Composition API & TypeScript",
      "Reusable component systems",
      "Complex forms, validation, and workflows",
      "High-performance, SEO-friendly builds",
      "Upgrades from Vue 2 → Vue 3"
    ]
  },

  {
    id: "headless-wp",
    title: "Headless WordPress",
    short: "WordPress as a headless CMS powering React/Vue front-ends.",
    full:
      "Modern decoupled setups using WordPress as a flexible CMS backend with a React or Vue front-end.",
    bullets: [
      "REST API / GraphQL integrations",
      "ACF, CPTs, and custom endpoints",
      "React + WordPress / Vue + WordPress hybrid builds",
      "Server performance, caching, CDNs (e.g. CloudFront)",
      "WP-CLI, migrations, and hardening",
      "SEO- and content-friendly architectures"
    ]
  },

  {
    id: "ui-ux",
    title: "UI/UX & Pixel-Perfect Implementation",
    short: "Figma → production with sharp, consistent front-end code.",
    full:
      "High-quality, design-accurate interfaces with responsive layouts and thoughtful UX details.",
    bullets: [
      "Pixel-perfect Figma → production builds",
      "Component libraries & design systems",
      "Responsive layouts for all devices",
      "UX polish: loading states, empty states, and edge cases",
      "Design collaboration with product and UX teams"
    ]
  },

  {
    id: "animations",
    title: "Animations & Interactions",
    short: "Framer Motion / GSAP-powered motion and micro-interactions.",
    full:
      "Bringing interfaces to life with motion that feels smooth, intentional, and performance-friendly.",
    bullets: [
      "Framer Motion for React",
      "GSAP for advanced timelines and scroll effects",
      "Scroll-based animations and reveal effects",
      "Transition systems and micro-interactions",
      "Light 3D / WebGL-style effects when needed"
    ]
  },

  {
    id: "ai-tools",
    title: "AI-Powered Interfaces & Tools",
    short: "Custom AI flows for chat, media, and creative tools.",
    full:
      "Product-focused AI integrations for real-world workflows: chat, creative tools, automation, and media.",
    bullets: [
      "ChatGPT/LLM-powered UI features",
      "AI-driven search, forms, and assistants",
      "Audio/video AI integrations",
      "Automation workflows and glue tooling",
      "Custom creative tools (music, video, transcription, etc.)"
    ]
  },

  {
    id: "performance-seo",
    title: "Performance, SEO & Core Web Vitals",
    short: "Faster loads, stronger Lighthouse scores, happier users.",
    full:
      "Deep performance and SEO work so your site loads quickly and ranks more reliably.",
    bullets: [
      "Performance audits & bottleneck identification",
      "Code splitting, lazy loading, and bundling improvements",
      "Caching & CDN strategy",
      "SEO structure & best practices",
      "Accessibility improvements",
      "Image/video optimisation"
    ]
  },

  {
    id: "ongoing",
    title: "Ongoing Development & Maintenance",
    short: "Long-term partnership for continuous improvements.",
    full:
      "Stable, predictable support for teams who want a long-term front-end partner instead of one-off help.",
    bullets: [
      "Continuous improvements and small enhancements",
      "New feature development and refactors",
      "Bug fixes and stability work",
      "Code reviews and technical guidance",
      "Light technical planning & consulting"
    ]
  }
];