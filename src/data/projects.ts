export type MockupKey = "analytics" | "mobile" | "brand" | "commerce";

export type ProjectVisual =
  | { kind: "image"; src: string; alt: string }
  | { kind: "mockup"; mockup: MockupKey };

export type CaseChapter = {
  label: string;
  title: string;
  body: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  tagline: string;
  summary: string;
  categories: string[];
  year: string;
  role: string;
  tools: string[];
  timeline: string;
  outcome: { value: string; label: string };
  /** Controls how the card is composed on the home page. */
  layout: "text-left" | "image-left" | "full" | "bento";
  theme: "light" | "dark";
  visual: ProjectVisual;
  support?: ProjectVisual[];
  caseStudy: {
    intro: string;
    chapters: CaseChapter[];
    results: { value: string; label: string }[];
    lessons: string;
  };
};

export const projects: Project[] = [
  {
    slug: "lumora-beauty-rebrand",
    index: "01",
    title: "Lumora Beauty Rebrand",
    client: "Lumora",
    tagline: "A quiet luxury identity for a skincare label growing up.",
    summary:
      "Lumora had outgrown a founder-made identity that no longer matched the quality of the product inside the bottle. We rebuilt the brand from positioning down to packaging, then carried it into a commerce experience that sells the ritual rather than the ingredient list.",
    categories: ["Brand Identity", "Art Direction", "E-commerce"],
    year: "2026",
    role: "Brand & Product Designer",
    tools: ["Figma", "Illustrator", "Shopify", "After Effects"],
    timeline: "10 weeks",
    outcome: { value: "+38%", label: "conversion on the new PDP" },
    layout: "text-left",
    theme: "light",
    visual: {
      kind: "image",
      src: "/images/project-lumora.jpg",
      alt: "Lumora skincare bottles arranged on a sand-coloured podium",
    },
    caseStudy: {
      intro:
        "Lumora makes a nine-product skincare line sold in 40 stockists. The formulations were premium; every touchpoint around them said otherwise. The rebrand had to raise perceived value without losing the warmth that made early customers loyal.",
      chapters: [
        {
          label: "Challenge",
          title: "A premium product wrapped in a starter-kit brand",
          body: "Retail buyers consistently placed Lumora a full price tier below where the formulation belonged. The wordmark was a stretched geometric sans, packaging copy competed with itself, and the site read as a catalogue rather than a brand. Meanwhile the founders were preparing for a department-store conversation that the existing identity would not survive.",
          bullets: [
            "Sub-2% conversion on product pages despite strong traffic",
            "Eleven packaging variants with no shared system",
            "No verbal identity, so every channel sounded different",
          ],
        },
        {
          label: "Research",
          title: "Listening before drawing",
          body: "I interviewed nine customers and three stockist buyers, then audited fourteen competitors across the quiet-luxury and clinical-skincare poles. The pattern was clear: customers bought Lumora for how it made a morning feel, not for the actives. The brand was selling chemistry to people buying a ritual.",
          bullets: [
            "9 customer interviews, 3 buyer interviews",
            "14-brand competitive and shelf audit",
            "Analytics review across 6 months of store data",
          ],
        },
        {
          label: "Strategy",
          title: "Positioning around the ritual, not the ingredient",
          body: "We reframed Lumora as 'considered care' — a brand of slow, deliberate routines. That single decision resolved most downstream questions: the palette went warm and mineral instead of clinical white, the photography moved to long soft shadows, and the copy shortened until every line could be read on a shelf from a metre away.",
        },
        {
          label: "Visual direction",
          title: "Warm mineral neutrals, one confident wordmark",
          body: "The identity is built on a custom-tuned serif wordmark with a lowered waistline, set against sand, clay and bone neutrals. A single accent — a soft terracotta — carries attention across packaging and web. Nothing else is allowed to shout.",
          bullets: [
            "Custom wordmark with three optical sizes",
            "Five-colour mineral palette with strict usage rules",
            "Photography direction: single source light, long shadow",
          ],
        },
        {
          label: "Design system",
          title: "A kit the in-house team can actually run",
          body: "Packaging, social and web share one 8px spacing scale and one type ramp. I shipped a 60-page brand book plus a Figma library with packaging dielines, six social templates and a component set for the store, so the two-person marketing team could keep the brand consistent without a designer on retainer.",
        },
        {
          label: "Commerce",
          title: "Rebuilding the product page around the decision",
          body: "The new product page leads with the ritual and the result, moves ingredients into a progressive-disclosure panel, and pairs every product with the routine it belongs to. Bundles surface before checkout rather than after, which is where most of the basket lift came from.",
        },
      ],
      results: [
        { value: "+38%", label: "Product page conversion" },
        { value: "+52%", label: "Average order value" },
        { value: "2.4×", label: "Stockist enquiries per month" },
        { value: "60pp", label: "Brand book delivered" },
      ],
      lessons:
        "The most valuable output was not the wordmark — it was the sentence that defined what Lumora sells. Once 'considered care' existed, every subsequent decision took a fraction of the time, and the client could brief agencies without me in the room.",
    },
  },
  {
    slug: "northwind-clinical-suite",
    index: "02",
    title: "Northwind Clinical Suite",
    client: "Northwind Health",
    tagline: "Making a multi-clinic healthcare platform feel like one product.",
    summary:
      "Northwind ran five clinics on four disconnected tools. I designed a single multi-tenant workspace covering scheduling, patient records and billing, then worked alongside engineering through delivery to keep the shipped product faithful to the design.",
    categories: ["Product Design", "UI/UX Design", "Design Systems"],
    year: "2025",
    role: "Lead Product Designer",
    tools: ["Figma", "React", "TypeScript", "Storybook"],
    timeline: "6 months",
    outcome: { value: "−41%", label: "time to book an appointment" },
    layout: "image-left",
    theme: "light",
    visual: { kind: "mockup", mockup: "analytics" },
    caseStudy: {
      intro:
        "Northwind's front-desk staff were the real users: high volume, constant interruption, low tolerance for anything clever. The brief was to unify five clinics onto one platform without slowing down the people who keep them running.",
      chapters: [
        {
          label: "Challenge",
          title: "Four tools, five clinics, one very tired front desk",
          body: "Booking lived in one system, records in another, billing in a spreadsheet and reminders in a personal phone. Staff averaged eleven context switches to complete a single new-patient booking, and every clinic had invented its own workaround. Any new system had to be faster than the mess on day one or it would be abandoned.",
          bullets: [
            "11 context switches per new-patient booking",
            "5 clinics with divergent, undocumented processes",
            "Zero shared patient identity across locations",
          ],
        },
        {
          label: "Research",
          title: "Two weeks behind the desk",
          body: "I shadowed reception at three clinics across full shifts, timed the twelve most frequent tasks, and mapped every interruption. The insight that shaped the product: staff almost never complete a task in one pass. The interface had to support being abandoned halfway and resumed ten minutes later.",
          bullets: [
            "18 hours of contextual observation",
            "12 core tasks timed and journey-mapped",
            "Interruption log across 3 sites",
          ],
        },
        {
          label: "Strategy",
          title: "Design for interruption, not for demos",
          body: "Every flow got persistent draft state, a visible resume path and a single primary action per screen. We deliberately rejected the dashboard-first pattern the stakeholders expected in favour of a queue-first workspace that mirrors how the desk actually operates.",
        },
        {
          label: "Wireframes",
          title: "Low fidelity, tested with real staff",
          body: "Four rounds of greyscale prototypes tested with nine staff members. Round two killed our tabbed patient record — under pressure, nobody found the second tab. The replacement single-scroll record with a sticky action rail tested 34% faster and shipped essentially unchanged.",
        },
        {
          label: "Design system",
          title: "A 48-component library shared with engineering",
          body: "Tokens for colour, spacing, type and elevation live in one Figma library mirrored one-to-one in Storybook. Every component carries documented keyboard behaviour and an accessible name, which removed most of the handoff conversation entirely.",
          bullets: [
            "48 components, tokenised and documented",
            "WCAG 2.2 AA verified across all core flows",
            "Full keyboard operation for the booking path",
          ],
        },
        {
          label: "Development",
          title: "Designing in the codebase",
          body: "I built the component library in React and TypeScript alongside the engineering team, which meant spacing, focus states and motion survived the trip from Figma. Multi-tenancy was handled with a theming layer so each clinic keeps its own identity on top of shared primitives.",
        },
      ],
      results: [
        { value: "−41%", label: "Time to book an appointment" },
        { value: "94%", label: "Staff task-success rate" },
        { value: "5→1", label: "Tools consolidated" },
        { value: "AA", label: "WCAG 2.2 conformance" },
      ],
      lessons:
        "Shadowing beat every workshop we ran. The single most valuable design decision — persistent drafts — came from watching a receptionist get interrupted four times in one booking, not from anything anyone said in a room.",
    },
  },
  {
    slug: "vaultline-investing",
    index: "03",
    title: "Vaultline",
    client: "Vaultline",
    tagline: "Calm, legible investing for people who find investing stressful.",
    summary:
      "A consumer investing app rebuilt around clarity. We stripped the trading-terminal aesthetic, designed a progressive-disclosure information model, and shipped a dark interface that reads comfortably at 6am and 11pm.",
    categories: ["Product Design", "UI/UX Design", "Motion"],
    year: "2025",
    role: "Product Designer",
    tools: ["Figma", "Rive", "React Native"],
    timeline: "14 weeks",
    outcome: { value: "+27%", label: "week-four retention" },
    layout: "full",
    theme: "dark",
    visual: {
      kind: "image",
      src: "/images/project-fintech.jpg",
      alt: "Abstract translucent blue panels floating in deep navy space",
    },
    support: [{ kind: "mockup", mockup: "mobile" }],
    caseStudy: {
      intro:
        "Vaultline's users were first-time investors, but the product had been designed for people who already knew what a candlestick chart meant. Retention fell off a cliff in week two, right after the novelty of the first deposit wore off.",
      chapters: [
        {
          label: "Challenge",
          title: "An app that made beginners feel stupid",
          body: "Session recordings showed a consistent pattern: users opened the app, looked at a wall of numbers they could not interpret, and closed it. The product was answering questions its audience had not yet learned to ask.",
          bullets: [
            "62% of new users never returned after week two",
            "Nine data points competing on the home screen",
            "Support tickets dominated by 'what does this mean?'",
          ],
        },
        {
          label: "Research",
          title: "Finding the one question that matters",
          body: "Diary studies with fourteen users over three weeks surfaced a single recurring question: 'am I okay?' Not performance versus benchmark, not allocation drift — just reassurance. Everything else was secondary and could be earned through progressive disclosure.",
        },
        {
          label: "Strategy",
          title: "One answer per screen",
          body: "The home screen now answers 'am I okay?' in one sentence and one shape. Detail is available, never mandatory. We introduced a confidence-building layer that explains movements in plain language, and deliberately delayed advanced tooling until a user has completed three meaningful actions.",
        },
        {
          label: "Visual direction",
          title: "Dark, but never heavy",
          body: "A deep navy foundation with a single electric-blue accent keeps focus on data. Type is set generously; charts use soft gradients rather than hard lines. Nothing blinks, flashes or pulses — a deliberate rejection of the urgency patterns common in the category.",
        },
        {
          label: "Motion",
          title: "Motion that explains, not decorates",
          body: "Every transition carries meaning: values count up so change is legible, charts draw left to right so time direction is obvious, and sheets rise from their trigger so users keep their place. All motion respects reduced-motion preferences and degrades to instant states.",
        },
        {
          label: "Results",
          title: "Fewer numbers, more confidence",
          body: "Week-four retention rose 27% and support volume around interpretation dropped by more than half. The most-quoted piece of user feedback was simply: 'it stopped making me anxious.'",
        },
      ],
      results: [
        { value: "+27%", label: "Week-four retention" },
        { value: "−54%", label: "Interpretation support tickets" },
        { value: "9→2", label: "Home screen data points" },
        { value: "4.8", label: "App Store rating" },
      ],
      lessons:
        "Removing features improved the product more than adding any. The hardest part was not the design — it was building the evidence stakeholders needed before they would agree to show less.",
    },
  },
  {
    slug: "orbit-design-system",
    index: "04",
    title: "Orbit Design System",
    client: "Orbit Labs",
    tagline: "One system, four products, a team that finally ships in parallel.",
    summary:
      "Orbit's four products shared a logo and nothing else. I built a token-driven design system and a themable React component library that cut new-feature design time roughly in half.",
    categories: ["Design Systems", "Frontend", "Documentation"],
    year: "2024",
    role: "Design Systems Lead",
    tools: ["Figma", "React", "TypeScript", "Style Dictionary"],
    timeline: "5 months",
    outcome: { value: "2×", label: "faster feature delivery" },
    layout: "bento",
    theme: "light",
    visual: { kind: "mockup", mockup: "brand" },
    support: [{ kind: "mockup", mockup: "commerce" }],
    caseStudy: {
      intro:
        "Four product teams, four button components, four definitions of 'primary blue'. Orbit did not have a design problem so much as a coordination problem wearing a design costume.",
      chapters: [
        {
          label: "Challenge",
          title: "Four products pretending to be one company",
          body: "An inventory audit found 27 button variants, 14 greys and 6 competing modal patterns across the suite. Designers rebuilt the same components repeatedly; engineers reimplemented them differently each time; QA found the same bug in four places.",
          bullets: [
            "27 button variants across 4 products",
            "14 near-identical greys in production",
            "No shared source of truth for spacing or type",
          ],
        },
        {
          label: "Strategy",
          title: "Tokens first, components second, governance always",
          body: "We started with a three-tier token architecture — primitive, semantic, component — published through Style Dictionary so design and code consume the same source. Theming became a data problem rather than a design one, which is what allowed four brands to share one library.",
        },
        {
          label: "Build",
          title: "A library engineers actually want to use",
          body: "Thirty-two components built in React and TypeScript, each with tests, keyboard support and documented props. Adoption was driven by making the system the fastest path: if using Orbit was slower than hand-rolling, we treated that as a bug in the system.",
          bullets: [
            "32 components with full test coverage",
            "3-tier token architecture, one source of truth",
            "Automated visual regression on every release",
          ],
        },
        {
          label: "Documentation",
          title: "Docs as a product",
          body: "The documentation site carries live examples, do-and-don't guidance, accessibility notes and migration codemods. Every component page answers 'when should I not use this?', which turned out to be the most-read section.",
        },
        {
          label: "Governance",
          title: "Keeping it alive after launch",
          body: "A lightweight contribution model with a fortnightly review, a public roadmap and a deprecation policy. Ownership sits with a rotating group of two designers and two engineers rather than a single gatekeeper.",
        },
      ],
      results: [
        { value: "2×", label: "Faster feature delivery" },
        { value: "32", label: "Production components" },
        { value: "−78%", label: "Duplicate UI code" },
        { value: "4", label: "Products on one system" },
      ],
      lessons:
        "A design system succeeds on adoption, not craft. We spent nearly as long on documentation, migration tooling and governance as on the components themselves — and that ratio was correct.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length];
}
