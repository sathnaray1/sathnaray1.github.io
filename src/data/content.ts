/* ============================================================
   Single source of truth for all portfolio copy.
   Edit here to update the site. Sourced from LinkedIn + resume.
   Placeholders marked  // EDIT  are safe to swap later.
   ============================================================ */

export const profile = {
  name: "Sathya Narayanan",
  role: "Senior Director, Product",
  tagline: "Building products at the intersection of experimentation, analytics & AI.",
  location: "Atlanta, GA",
  email: "sathnaray@gmail.com",
  linkedin: "https://www.linkedin.com/in/snarayanan2/",
};

export const nav = [
  { label: "Work", href: "#experience" },
  { label: "AI", href: "#ai" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* — Impact stats (animated count-up) — */
export const stats = [
  { value: 150, prefix: "$", suffix: "M+", label: "ARR scaled across portfolio" },
  { value: 75, prefix: "", suffix: "+", label: "cross-functional team led" },
  { value: 9, prefix: "", suffix: "+", label: "years building & scaling" },
  { value: 3, prefix: "", suffix: "T+", label: "events processed daily" },
  { value: 99.99, prefix: "", suffix: "%", label: "platform uptime", decimals: 2 },
  { value: 45, prefix: "+", suffix: "%", label: "experiments run with AI" },
];

/* — Experience (headline-level; intrigue, not detail) — */
export const experience = [
  {
    company: "Optimizely",
    role: "Senior Director, Product",
    period: "2023 — Present",
    location: "Seattle, WA",
    progression: "Principal → Sr. Manager → Director → Sr. Director",
    blurb:
      "Leads product vision, strategy & roadmap for Feature Experimentation, Feature Flagging, Developer Experience, the Experimentation Data Pipeline, Statistics, and Analytics — empowering product, engineering, and data-science teams to ship, test, and measure with statistical rigor, all accelerated by AI.",
    highlights: [
      "Architected the post-acquisition analytics integration — shipped in 4 weeks: $10M new + $35M at-risk ARR retained",
      "Shipped AI agents & MCP servers and conversational analytics — +45% experiments, days-to-seconds insight",
      "Scaled developer platform: 13+ SDKs, public REST APIs, 3T+ events/day at 99.99% uptime",
    ],
    links: [
      { label: "Feature Experimentation", href: "https://www.optimizely.com/products/feature-experimentation/" },
      { label: "Analytics", href: "https://www.optimizely.com/products/analytics/" },
      { label: "Opal AI", href: "https://www.optimizely.com/ai/" },
    ],
    accent: true,
  },
  {
    company: "Workboard",
    role: "Senior Product Manager",
    period: "2019 — 2023",
    location: "Redwood City, CA",
    progression: "Consultant → Manager → PM → Sr. PM",
    blurb:
      "Led product for OKRs, long-range strategy, and generative AI. Brought 0→1 products to market and embedded AI into core workflows, enabling millions of teams to align and execute on strategy.",
    highlights: [
      "Built 0→1 OKR & strategy products + a Gen-AI Co-Author — $3M ARR in 6 months",
      "Grew monthly active users +55%; scaled to 2.4M+ teams setting OKRs",
      "Implemented enterprise OKR programs across 11 F500 accounts, coaching CxOs & SVPs",
    ],
    links: [{ label: "Workboard", href: "https://www.workboard.com/" }],
    accent: false,
  },
  {
    company: "Ernst & Young",
    role: "Senior Technology Consultant",
    period: "2017 — 2019",
    location: "San Francisco, CA",
    progression: "Technology lead, risk-management practice",
    blurb:
      "Global technology lead for the risk-management practice — product owner for a predictive risk-analytics platform serving Fortune 500 clients, profiling risk across hundreds of millions of third parties.",
    highlights: [
      "Launched a managed-service offering — $37M revenue",
      "Led 15 consultants deploying risk products for 24 global clients; 300M+ third parties profiled",
      "Product owner for predictive analytics & ServiceNow VRM; drove RPA automation",
    ],
    links: [],
    accent: false,
  },
];

export const earlier =
  "Earlier: Strategy & Operations at Ford Motor Company · Goldman Sachs · Plex Systems.";

/* — AI Leadership (centerpiece differentiator) — */
export const aiLeadership = {
  intro:
    "I don't just direct AI products — I build them. Hands-on with prototyping, evals, and agentic systems, I run my own product org on AI infrastructure I designed myself.",
  cards: [
    {
      kicker: "Autonomous systems",
      title: "An AI org that runs itself",
      body:
        "Designed a fleet of scheduled AI agents that auto-refresh competitive intel, satisfaction, usage analytics, win/loss, and executive briefings every week — orchestrated across a live MCP-connected data stack.",
    },
    {
      kicker: "Agent design",
      title: "19+ Opal AI agents shipped",
      body:
        "Architected specialized and workflow agents spanning the full experiment lifecycle — ideation, analysis, reporting, and governance — with structured tool selection and canvas output.",
    },
    {
      kicker: "In-product AI",
      title: "AI shipped to customers",
      body:
        "Generative experiment & variation creation, conversational analytics that cuts time-to-insight from days to seconds, and MCP servers that make experimentation agent-native.",
    },
    {
      kicker: "Builder",
      title: "Prototypes & code, by hand",
      body:
        "Demo generators, mock-data tooling, automated feedback pipelines, and Next.js / SvelteKit experimentation demos — built with AI-assisted development end to end.",
    },
  ],
};

/* — Featured writing / thought leadership (real links) — */
export const writing = [
  {
    title: "The future of digital experience optimization",
    kicker: "Perspective",
    desc: "Where digital growth and experience optimization are heading next.",
    href: "https://www.optimizely.com/insights/blog/the-future-of-digital-experience-optimization/",
  },
  {
    title: "AI in product development: how to get started",
    kicker: "Playbook",
    desc: "A practical on-ramp for teams putting AI to work in how they build product.",
    href: "https://www.optimizely.com/insights/blog/how-to-start-using-ai-in-product-development/",
  },
  {
    title: "Warehouse-native analytics & the future of experimentation",
    kicker: "Webinar",
    desc: "Why the warehouse is becoming the center of gravity for experimentation.",
    href: "https://www.optimizely.com/insights/webinar-warehouse-native-analytics-video/",
  },
];

/* — About — */
export const about = {
  paragraphs: [
    "I'm a product leader at the intersection of experimentation, analytics, and AI — passionate about building and scaling products, and the teams behind them, that solve real customer problems and deliver real-world impact.",
    "I lead a team of product managers and statisticians, and I mentor PMs across the org — sharpening product thinking, growing careers, and raising the bar on craft. From 0→1 innovation to scaling mature product lines, I bring a hands-on, outcome-driven approach.",
  ],
  facets: [
    "Product Leader",
    "0→1 Builder",
    "AI Native",
    "Mentor",
    "Strategy Coach",
    "Educator",
    "Polyglot",
  ],
  languages: [
    { lang: "English", level: "Native / fluent" },
    { lang: "Tamil", level: "Native / fluent" },
    { lang: "German", level: "Working proficiency" },
  ],
  cert: "OKR Expert · certified 200+ coaches",
  education: "B.S. Industrial & Operations Engineering, University of Michigan — Summa Cum Laude (in 2.5 years)",
};

/* — Volunteering (provided) — */
export const volunteering = [
  {
    role: "Board Member · Career Chair",
    org: "University of Michigan Alumni Association",
    period: "2017 — 2024 · 7 yrs",
    blurb:
      "Planned career panels, social, and volunteering events for U-M alumni across the SF Bay Area.",
  },
  {
    role: "Young Professionals Council",
    org: "San Francisco Education Fund",
    period: "2017 — 2024 · 7 yrs",
    blurb:
      "Helped organize a charity gala raising $495K for scholarships and teaching programs in Bay Area schools.",
  },
  {
    role: "English Teacher",
    org: "International Volunteer HQ — Peru",
    period: "2017 · 2 mos",
    blurb:
      "Taught English abroad in Peru, from 2nd graders to working professionals.",
  },
];

/* — Travel (seeded from evidence; EDIT to add real destinations + photos) — */
export const travel = {
  intro:
    "A frequent traveler — happiest with a boarding pass and somewhere new to understand.",
  places: [
    { place: "Peru", note: "Taught English in the Andes" },        // evidenced
    { place: "Germany", note: "Sprichst du Deutsch?" },             // evidenced (language)
    { place: "Add a destination", note: "EDIT — your travels" },    // EDIT
    { place: "Add a destination", note: "EDIT — your travels" },    // EDIT
    { place: "Add a destination", note: "EDIT — your travels" },    // EDIT
  ],
};

/* — Off the clock (multi-talented personal touch; EDIT specifics) — */
export const passions = {
  intro: "The person behind the product.",
  items: [
    { title: "Trilingual", body: "English, Tamil, and a working hand at German." },
    { title: "Coach & teacher", body: "Certified 200+ OKR coaches; taught English in Peru; mentors PMs." },
    { title: "Maker", body: "Builds AI prototypes and code for the joy of it, not just the roadmap." },
    { title: "Your passion", body: "EDIT — a hobby or interest you'd like to feature." },
  ],
};
