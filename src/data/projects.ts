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
    slug: "leadgpt",
    index: "01",
    title: "LeadGPT",
    client: "LeadGPT",
    tagline:
      "AI-powered lead generation and outreach automation - campaigns, sequences, and a live inbox, billed per lead or per meet.",
    summary:
      "B2B teams needed one system to generate leads, run automated email and LinkedIn outreach, and pay only for results - not a pile of prospecting tools. I designed, built, and deployed LeadGPT's production Next.js portal: role-based client and operator surfaces over a REST API for campaigns, AI prompt libraries, sequences, inbox, sender infrastructure, and wallets. The shipped product is the control plane operators use to run lead-gen automation and the inbox clients use to close.",
    categories: ["Lead Generation", "AI SaaS", "Full-Stack"],
    year: "2026",
    role: "AI Product Engineer",
    tools: ["Next.js", "TypeScript", "React", "Nylas", "SmartLead", "Lexical"],
    timeline: "Nov 2025 – Feb 2026",
    outcome: { value: "Prod", label: "Operator + client portal shipped" },
    layout: "image-left",
    theme: "light",
    visual: {
      kind: "image",
      src: "/images/project-leadgpt.jpg",
      alt: "AI crystal sorting a crowd of prospects into qualified golden leads walking toward a meeting doorway, with email planes and profile tokens in orbit",
    },
    caseStudy: {
      intro:
        "LeadGPT is an AI lead-generation product. This is the production portal clients and operators use to run campaigns, qualify replies, and bill for meetings or leads.",
      chapters: [
        {
          label: "Challenge",
          title: "Lead gen is an ops system, not a form",
          body: "Prospecting, mailbox warmup, sequencing, reply handling, and billing usually live in separate tools. Clients needed a single inbox and stats view. Operators needed to configure AI outreach, sender infra, and lead qualification without leaving the product. The job was to ship that control plane - not a marketing site.",
          bullets: [
            "One app for clients and operators, split by role",
            "AI sequences and prompt libraries, not just a mailbox",
            "Wallets and sender infra in the same product",
          ],
        },
        {
          label: "Architecture",
          title: "Next.js portal over a cookie-auth API",
          body: "The portal is Next.js 15 (App Router) and TypeScript, talking to a versioned REST backend via a typed HTTP client. Cookie sessions (access + refresh) are forwarded on the server; middleware gates routes by role: client vs superadmin/masteradmin. Domain services wrap campaigns, prospects, sequences, prompt libraries, inbox, wallets, Nylas, and procurement. Empty API 404s are treated as product states, not crashes.",
        },
        {
          label: "Product",
          title: "Automation config meets the live inbox",
          body: "Clients land in inbox and statistics: email and LinkedIn threads, reply/forward with attachments, geo and engagement charts, profile, exclusions, and pay-per-lead or pay-per-meet wallets. Operators run the rest of the machine: day-offset sequences, prompt libraries (system + user prompts) bound to sequences, SmartLead campaign IDs, Nylas OAuth, sender/domain/mailbox procurement with Zapmail warmup, outreach cooldowns and company limits, and a master inbox that approves leads as verified, maybe, not interested, or automated.",
          bullets: [
            "Client: inbox, stats, profile, wallet",
            "Ops: sequences, prompts, SmartLead, Nylas",
            "Infra: senders, domains, mailboxes, warmup",
          ],
        },
        {
          label: "Ship",
          title: "Production build, Hostinger Node deploy",
          body: "The app builds with Next.js and is packaged for a Hostinger Node.js host (zip + startup server). Env is a single public API base URL. Role cookies drive home routes: operators to users, clients to inbox. I owned the majority of the work on admin flows, prompt/sequence UX, client statistics, Nylas, outreach settings, and sender/mailbox work through Feb 2026.",
        },
      ],
      results: [
        { value: "Prod", label: "Hostinger Node.js deploy" },
        { value: "3 roles", label: "Client, superadmin, masteradmin" },
        { value: "Email + LinkedIn", label: "Dual-channel outreach inbox" },
        { value: "Per-lead / per-meet", label: "Wallet billing in product" },
      ],
      lessons:
        "A lead-gen AI product is an operator system. Ship prompts, sequences, sender infra, and qualification in the same app as the client inbox, or ops will invent a second product in spreadsheets.",
    },
  },
  {
    slug: "kaushal-dave-associates",
    index: "02",
    title: "Kaushal Dave & Associates",
    client: "Kaushal Dave & Associates",
    tagline:
      "A production site that makes a Gujarat property-law firm searchable, Bar-Council-safe, and one tap from WhatsApp.",
    summary:
      "A multi-office property and land law practice needed a public website that could rank, stay inside advocate-advertising rules, and convert visitors without a backend. I built the site in Next.js — SEO and schema, an interactive Gujarat map, legal pages, and a WhatsApp intake path — then deployed it on Cloudflare Workers. Production marketing site, security headers, and an indexing kill-switch.",
    categories: ["Legal", "Web", "SEO"],
    year: "2026",
    role: "Website Developer",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "OpenNext",
      "react-simple-maps",
    ],
    timeline: "Jul 2025 – Jul 2026",
    outcome: { value: "Prod", label: "Cloudflare Workers" },
    layout: "text-left",
    theme: "light",
    visual: {
      kind: "image",
      src: "/images/project-kaushal.jpg",
      alt: "Law-office desk with a Gujarat map, three office pins, title papers, and a green WhatsApp enquiry bubble",
    },
    caseStudy: {
      intro:
        "This is the public website I built for Kaushal Dave & Associates, a property and land law practice with offices in Rajkot, Amreli, and Savarkundla. Its job is to make the firm findable, explain the work, and send a serious enquiry to WhatsApp or email.",
      chapters: [
        {
          label: "Challenge",
          title: "A law firm site that cannot behave like ads",
          body: "A Gujarat property and land practice needed a public website that could explain ToP NA, title, revenue, and RERA work without violating Bar Council advertising rules. There is no API, database, auth, or intake form, so visitors had to reach counsel another way. The firm also had to show three offices as a statewide practice, not a single-city brochure. Search, compliance pages, and a real conversion path had to ship as one site.",
          bullets: [
            "Bar Council rules constrain claims, comparisons, and solicitation.",
            "No CRM or form backend in the codebase.",
            "Presence across Rajkot, Amreli, and Savarkundla had to be visible, not listed.",
          ],
        },
        {
          label: "Architecture",
          title: "App Router on Workers, data as code",
          body: "The website is a Next.js App Router app with TypeScript strict mode and a typed env module that throws in production if site URL or WhatsApp is missing. Firm copy lives in data modules for team, offices, and clients. OpenNext compiles the site to a Cloudflare Worker; Wrangler owns the worker name, assets, and image binding. Security headers are set in Next config and again in public/_headers, including HSTS.",
          bullets: [
            "Fail-closed env: NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_WHATSAPP_NUMBER required in production.",
            "Indexing is a flag, not a default: robots.txt can disallow all crawlers.",
            "No server routes: the Worker hosts the website, not a business API.",
          ],
        },
        {
          label: "Build",
          title: "Map, schema, and WhatsApp as intake",
          body: "Practice areas, counsel, and client marks are first-class sections, not afterthoughts. An interactive Gujarat GeoJSON map highlights office districts and markers, with a Maps link on the Amreli head office. Root layout ships metadata, Open Graph, a robots policy, sitemap, and LegalService JSON-LD. A small WhatsApp module builds wa.me URLs, display numbers, and tel: links for a floating CTA. Privacy, disclaimer, and Bar Council pages exist so compliance is a route, not a footnote.",
        },
        {
          label: "Deploy",
          title: "Preview, upload, then Cloudflare",
          body: "package.json exposes preview, deploy, and upload through OpenNext and Wrangler. Git history through July 2026 includes explicit Cloudflare deploy triggers. Production config fails closed; indexing stays off until NEXT_PUBLIC_ALLOW_INDEXING is true. Lint and typecheck scripts exist. This repo has no automated tests.",
        },
      ],
      results: [
        { value: "Prod", label: "Cloudflare Workers via OpenNext" },
        { value: "JSON-LD", label: "LegalService schema, sitemap, robots" },
        { value: "3 offices", label: "Interactive Gujarat district map" },
        { value: "WhatsApp", label: "Primary conversion path, no form API" },
      ],
      lessons:
        "Treat env and robots as part of the website, not afterthoughts. A legal site that ships with missing WhatsApp or accidental indexing is worse than a late deploy.",
    },
  },
  {
    slug: "excell",
    index: "03",
    title: "Excell",
    client: "Raghani Tradelink",
    tagline:
      "Keyboard-first ERP client for multi-branch trade ops: orders, GST billing, collections, brokerage, and live branch/director dashboards on a Frappe backend.",
    summary:
      "Raghani Tradelink needed a fast desktop/web front end for daily trading work - not a generic admin shell. I helped ship Excell: a React + Electron client with a typed Frappe API layer, stacked dialog workflows, GST-aware entry forms, brokerage/proforma flows, and Branch Head / Director command views, deployed as both a Windows app and assets served from the Frappe host.",
    categories: ["Full-Stack", "ERP", "Brokerage"],
    year: "2026",
    role: "Full-Stack Engineer",
    tools: ["React", "Vite", "Electron", "Material UI", "TanStack Query", "Frappe"],
    timeline: "Feb – Jul 2026",
    outcome: { value: "Prod", label: "Web + Electron client on Frappe" },
    layout: "full",
    theme: "dark",
    visual: {
      kind: "image",
      src: "/images/project-excell.jpg",
      alt: "Keyboard with glowing F-keys feeding a glass core connected to branch houses, invoices, and cartons - Excell as the trade ops surface",
    },
    caseStudy: {
      intro:
        "Excell is the day-to-day operating surface for Raghani Tradelink - masters, transactions, brokerage, reporting, and leadership cockpits. The product job is to make high-volume trade ops fast, GST-correct, and role-aware on top of a Frappe backend.",
      chapters: [
        {
          label: "Challenge",
          title: "Replace slow, fragmented trade workflows with one keyboard-driven client",
          body: "Operators live in orders, LR/tax invoices, collections, discounts, GR, ledgers, and brokerage - often across many branches. The UI had to feel like a dense desk app: F-key shortcuts, stacked modals, deep-linkable dialogs, and reliable autocomplete over large customer/supplier lists. GST math, outstanding/ageing, PDF/SSRS reports, and role views for Branch Head and Director had to sit on the same shell without turning every screen into a separate app.",
          bullets: [
            "Multi-branch trade + brokerage in one product",
            "F-key / dialog-stack UX for power users",
            "Frappe session API as system of record",
          ],
        },
        {
          label: "Architecture",
          title: "Thin React client, Frappe as the source of truth",
          body: "The app is a Vite React SPA that talks to Frappe over cookie sessions: custom login, resource CRUD, and whitelisted raghani.api.* methods wrapped in a shared client. TanStack Query and Zustand handle server cache and dialog/user/theme state. IndexedDB (rapp_cache) preloads customer/supplier link data for snappy search. PageDialogManager + dialogRegistry route ~100 surfaces as stackable dialogs with URL deep links. Electron wraps the same UI for desktop; production build copies assets into the Frappe raghani public/frontend tree.",
          bullets: [
            "frappe.js domain APIs: ledger, tax, orders, brokerage, PDFs",
            "Dual delivery: Electron NSIS + Frappe-hosted /ragh",
            "Vite proxy to the production Frappe host in local dev",
          ],
        },
        {
          label: "Build",
          title: "Ship the ops surface: entries, analysis, brokerage, leadership views",
          body: "Shared useEntryForm + gstUtils drive Collection, Discount, and GR with proportional GST allocation against open invoices. Masters and transactions use generic CRUD patterns plus specialized dialogs for pending orders, statements, commissions, and document inward. Brokerage covers proforma → final proforma → invoice conversion against Frappe methods. Branch Cockpit and Director Command Center pull analysis/stats APIs and chart sales, collection, GR, discount, and outstanding. Recharts powers the Branch Head finance dashboard; SSRS and PDF blob endpoints cover formal reporting.",
        },
        {
          label: "Ship",
          title: "Package for desk and cloud, wire auth, clear desktop session on quit",
          body: "electron-builder ships Windows (com.dhanveen.excell / productName Excell). The Electron shell loads the hosted /ragh app in production and clears session storage/cache on quit. Vite base paths align with Frappe's /assets/raghani/frontend/ asset layout. AuthContext restores Frappe sessions, clears IndexedDB on logout, and gates the shell behind the Raghani Tradelink launcher. My commits cluster on transaction modals, branch-head analysis dialogs, customer ledger, autocomplete fields, and dialog routing - the core of the shipped ops UX.",
        },
      ],
      results: [
        { value: "~107", label: "Routed pages & dialog surfaces" },
        { value: "Prod", label: "Hosted web + Electron desktop client" },
        { value: "GST-aware", label: "Shared entry forms for collection / discount / GR" },
        { value: "Multi-role", label: "Branch Cockpit + Director Command Center" },
      ],
      lessons:
        "Treat dialogs as first-class routes with a registry and stack manager - power users need F-keys and deep links more than another sidebar. Keep domain logic in a thin API module so GST forms, brokerage, and dashboards stay swappable without rewriting fetch plumbing.",
    },
  },
  {
    slug: "kisan-krishi-kendra",
    index: "04",
    title: "Kisan Krishi Kendra",
    client: "Optimiz",
    tagline:
      "Field-force OS for agri sales: live GPS trips, farmer CRM, and ERP sales in one stack.",
    summary:
      "Agri reps sell in villages where networks drop and HQ cannot see the day. I shipped Optimiz - a React Native field app, Node/gRPC backend, and React/Electron admin that tracks trips, captures farmer work, and syncs Marg ERP into the CRM. Production: offline queues, live location, and scheduled ERP ingest.",
    categories: ["AgriTech", "Field Force", "ERP Integration"],
    year: "2026",
    role: "Full-Stack Engineer",
    tools: ["React Native", "Node.js", "TypeScript", "MongoDB", "Redis", "gRPC"],
    timeline: "Ongoing",
    outcome: { value: "Prod", label: "Mobile + admin + ERP sync" },
    layout: "text-left",
    theme: "light",
    visual: {
      kind: "image",
      src: "/images/project-kisan.jpg",
      alt: "Field app on a phone: live GPS trip map and a farmer visit card with check-in",
    },
    caseStudy: {
      intro:
        "Optimiz runs the field day for agri sales teams. Reps plan trips and log farmers on a phone; managers watch live location, visits, orders, and real ERP sales from one admin.",
      chapters: [
        {
          label: "Challenge",
          title: "Rural sales with no live system of record",
          body: "Field employees cover farmers and dealers on bad cellular. Punch-in, trip distance, expenses, and orders used to live in notebooks or a desktop ERP the phone cannot reach. Managers needed proof of presence without trusting raw GPS. The CRM also had to match Marg parties by phone so farmer history was not a second, stale ledger.",
          bullets: [
            "Live-track trips without taking down REST",
            "Keep working offline, then sync",
            "Put ERP sales on the farmer record",
          ],
        },
        {
          label: "Architecture",
          title: "Four surfaces, one multi-tenant core",
          body: "The field app is React Native with Redux Toolkit, gRPC-web location, background GPS, and FCM. Express serves versioned REST with JWT and role middleware for manager, employee, officestaff, and admin. A sibling gRPC process streams locations, runs a Kalman filter, and keeps live state in Redis. MongoDB holds orgs, groups, trips, farmers, dealers, orders, payments, and field activities. The admin is React; Electron wraps it so Tally voucher sync can run on a desktop next to the accounts machine.",
        },
        {
          label: "Build",
          title: "Offline field ops plus Marg as source of truth",
          body: "Location runs as a background task, queues points when the network dies, and flushes over gRPC. A scheduler snapshots Redis every five minutes into trip timelines for route history, battery, and crash detection. Marg Corporate payloads are AES-decrypted, inflated, and upserted as parties, products, stock, and vouchers. Farmers link on last-10 phone digits, with optional auto-create. Dates parse as UTC wall-clock so an IST server does not shift fiscal years. Admin FarmerSales joins parties to invoice lines.",
          bullets: [
            "30-day cached-auth grace for rural login",
            "Cron for trip reminders, monthly DA, Marg ingest",
            "PDF invoices and Excel trip/expense reports",
          ],
        },
        {
          label: "Ship",
          title: "Process split, health gates, deployable clients",
          body: "A process manager boots REST and gRPC on separate ports and refuses to start if they are taken. Health reports Mongo and Redis so a load balancer can serve degraded. Schedulers start only after Mongo connects; Redis reconnects with backoff so a cache outage does not kill the API. Admin deploys via GitHub Actions to EC2. Electron builds Windows, Mac, and Linux. The phone app ships English, Hindi, and Gujarati.",
        },
      ],
      results: [
        { value: "Prod", label: "Field app, admin, gRPC live-track" },
        { value: "Kalman + Redis", label: "Filtered GPS on active trips" },
        { value: "Marg ERP", label: "Parties, stock, sales on farmers" },
        { value: "Offline-first", label: "Queued trips, tasks, expenses" },
      ],
      lessons:
        "Parse ERP datetimes as timezone-less wall-clock in UTC or year filters lie. Keep Redis behind reconnect-and-degrade so live tracking cannot take down the rest of the API.",
    },
  },
  {
    slug: "gurukul",
    index: "05",
    title: "Gurukul",
    client: "Gurukul",
    tagline:
      "A training LMS that catalogs courses in public and unlocks Bunny-hosted video only after enrollment, expiry, and per-lesson play checks.",
    summary:
      "Training video leaks if it lives behind a public CDN URL. I designed, built, and deployed Gurukul: a React + Express LMS on PostgreSQL where admins provision students, assign courses with optional time windows and play caps, and the API mints short-lived Bunny Stream tokens only after those checks pass. The shipped system is a production Replit app with a public catalog, first-lesson preview, resume playback, and an admin console for users, categories, and progress.",
    categories: ["EdTech", "LMS", "Full-Stack"],
    year: "2026",
    role: "Full-Stack Engineer",
    tools: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Bunny Stream"],
    timeline: "Jan – Apr 2026",
    outcome: { value: "Prod", label: "Replit autoscale LMS" },
    layout: "image-left",
    theme: "light",
    visual: {
      kind: "image",
      src: "/images/project-gurukul.jpg",
      alt: "Student at a desk with a laptop playing a video lesson and a tablet showing a course catalog",
    },
    caseStudy: {
      intro:
        "Gurukul is a training platform for assigned video courses, not an open library. Students browse the catalog; full playback is an enrollment decision enforced in the API.",
      chapters: [
        {
          label: "Challenge",
          title: "Public catalog, private stream",
          body: "The product job is to sell or assign training without handing students a durable video URL. A catalog can be public. The player cannot. Access also had to be a seat: who is enrolled, for how long, and how many full plays each lesson gets. Self-serve signup was the wrong model for instructor-managed students.",
          bullets: [
            "Catalog and curriculum are public; full video is not",
            "Students are provisioned by admins, not self-registered",
            "Access is per enrollment: expiry and optional play quotas",
          ],
        },
        {
          label: "Architecture",
          title: "The API is the CDN gate",
          body: "One Express process serves the React SPA and REST API. PostgreSQL via Drizzle holds users, categories, courses, lessons, enrollments, and lesson progress. Auth is JWT; inactive accounts are rejected on every authenticated request. Bunny Stream holds the files. The server signs a 15-minute embed token only after it proves active enrollment (or admin) and remaining plays. A shared Zod contract in shared/routes.ts is the client/server API.",
        },
        {
          label: "Product",
          title: "Seats with clocks and counters",
          body: "Admins create users, categories, and courses, then assign a course with optional accessDurationDays and maxPlaysPerVideo. Empty values mean unlimited. Video tokens refuse expired seats and exhausted play counts. Full views increment in a DB transaction with a 5-second debounce. The first lesson in curriculum order can preview without enrollment; later lessons cannot. Students get dashboards, My Courses, playhead resume, and completion percent. Register is disabled in the router.",
          bullets: [
            "Admin assign / unassign with duration and play caps",
            "First-lesson preview; signed tokens for the rest",
            "Playhead upsert plus course-level progress for student and admin",
          ],
        },
        {
          label: "Ship",
          title: "One port, production bundle",
          body: "Vite builds the client; esbuild bundles the server to dist/index.cjs. Production listens on PORT (default 5000) at 0.0.0.0 and serves static assets from the same process. Replit config targets autoscale with npm run build and node ./dist/index.cjs, PostgreSQL 16, Node 20. Drizzle migrations cover the schema including course categories and video play limits. No automated tests shipped in-repo.",
        },
      ],
      results: [
        { value: "Prod", label: "Replit autoscale (Node 20, Postgres 16)" },
        { value: "15 min", label: "SHA-256 Bunny embed tokens" },
        { value: "2 gates", label: "Enrollment expiry + per-video play caps" },
        { value: "Zod API", label: "Shared typed contract, client and server" },
      ],
      lessons:
        "Treat the player as untrusted. Mint a short-lived Bunny token only after the API proves enrollment, remaining plays, and account status. For assigned training, provision seats and expire them per enrollment instead of building public signup.",
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
