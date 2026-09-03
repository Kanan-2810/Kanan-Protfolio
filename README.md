# Kanan Dave — Portfolio

A single-page portfolio for a product, UI/UX and brand designer, plus a
case-study route for each project. Built with Next.js 14 (App Router),
TypeScript and Tailwind CSS.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## How it is organised

```
src/
  app/
    layout.tsx           root layout, metadata, self-hosted font
    page.tsx             composes the home page sections
    globals.css          design tokens, reveal animation, reduced-motion
    icon.svg             favicon
    fonts/               Plus Jakarta Sans variable woff2 (latin subset)
    not-found.tsx        404
    work/[slug]/page.tsx statically generated case studies
  components/
    layout/              Navbar, Footer, DarkRegion
    sections/            Hero, About, Stats, Projects, ProjectCard,
                         Services, Engagement, Testimonials, Faq,
                         Insights, Cta
    ui/                  Button, ArrowButton, Eyebrow, Pill, Reveal
    visuals/             hand-built interface mockups (markup, not images)
  data/                  all editable content
  lib/cn.ts              className joiner
public/images/           photography and rendered artwork
```

## Editing content

Everything you are likely to change lives in `src/data/` — no JSX edits needed.

| File              | Controls                                                     |
| ----------------- | ------------------------------------------------------------ |
| `site.ts`         | Name, role, email, location, availability, nav, social links |
| `about.ts`        | About statement, paragraphs, principles                      |
| `stats.ts`        | The four headline numbers and discipline tags                |
| `projects.ts`     | Projects **and** their full case studies                     |
| `services.ts`     | Bento services and the four process steps                    |
| `engagement.ts`   | Engagement tiers, pricing and inclusions                     |
| `testimonials.ts` | Quotes, clients and their metrics                            |
| `faq.ts`          | Accordion questions and answers                              |
| `insights.ts`     | Article cards                                                |

Swap imagery by replacing files in `public/images/` and updating the paths in
the relevant data file. `site.ts` holds four portraits:

| Field            | File                        | Used by                          |
| ---------------- | --------------------------- | -------------------------------- |
| `portraitCutout` | `kanan-cutout.webp`         | Hero, floated over the arch      |
| `avatarCutout`   | `kanan-avatar.webp`         | FAQ card corner                  |
| `portraitStudio` | `kanan-portrait-studio.jpg` | About card, and the social image |
| `portrait`       | `kanan-photo.jpg`           | Source the hero cutout came from |

### Replacing a cut-out portrait

The hero and FAQ card need transparent images so the subject sits *in front of*
the blue shape rather than inside a photo box. `scripts/cutout.swift` does that
on-device with Apple's Vision framework — no service upload, and it keeps the
original photo's detail:

```bash
swiftc -O scripts/cutout.swift -o /tmp/cutout
/tmp/cutout public/images/kanan-photo.jpg /tmp/cutout.png

# Images are served unoptimised, so encode to WebP by hand — alpha needs a
# lossy format with transparency, and lossless PNG is ~9x larger.
python3 -c "from PIL import Image; \
Image.open('/tmp/cutout.png').convert('RGBA').save(
  'public/images/kanan-cutout.webp', 'WEBP', quality=90, method=6, alpha_quality=100)"
```

It trims to the subject's bounding box. Use a chest-up photo with clear
separation between the subject and background. Requires macOS with the Xcode
command line tools; any background-removal tool producing a tightly cropped
transparent image works just as well.

One thing to check after swapping the hero photo: the portrait in `Hero.tsx`
carries a `-translate-x-[54%]` rather than the usual `50%`. A bounding box is
centred on the whole silhouette, but the eye reads the *head* as the subject's
centre, and in this photo the head sits about 4% right of the box's middle.
Re-measure and adjust that number if the new photo's head is offset
differently, otherwise the subject will look off-axis inside the arch.

### Adding a project

Append an entry to `projects` in `src/data/projects.ts`. The `slug` becomes the
case-study URL and the page is statically generated at build time. `layout`
picks one of four card compositions on the home page:

- `text-left` — copy left, visual right
- `image-left` — visual left, copy right
- `full` — dark full-bleed card with the visual behind the copy
- `bento` — asymmetric multi-tile card

`visual` is either `{ kind: "image", src, alt }` or
`{ kind: "mockup", mockup }`, where `mockup` selects one of the markup-based
device mockups in `src/components/visuals/Mockups.tsx`.

## Design system

Tokens live in `tailwind.config.ts`; layout primitives and the reveal
animation live in `src/app/globals.css`.

- **Canvas** `#EEF1F7` · **Ink** `#111111` · **Muted** `#5A6478`
- **Navy** `#062A70` → `#0A317E` for the dark passages
- **Accent** `#4C6FFF`, with `#3352E8` reserved for accent-coloured *text* so
  it clears WCAG AA on light backgrounds
- Radii: 12 / 16 / 20 / 24 / 32px, applied by element weight
- Spacing follows an 8px scale; the shell is capped at 1280px

The page is deliberately paced light → dark → light → dark: `DarkRegion` wraps
services, engagement and testimonials in a single navy panel so the transition
reads as one move rather than three.

## Notes on the implementation

- **No animation library.** Entrance animations are CSS transitions released by
  a small `IntersectionObserver` in `components/ui/Reveal.tsx`. Everything
  collapses to static under `prefers-reduced-motion`.
- **Self-hosted type.** Plus Jakarta Sans ships as one 27kB variable woff2 in
  `src/app/fonts/`, loaded through `next/font/local` — no third-party request
  on first paint. It was extracted from the `@fontsource-variable/plus-jakarta-sans`
  package (SIL Open Font License).
- **Mockups are markup.** The dashboards, phone screens and brand specimens in
  the project cards and bento grid are built from HTML and SVG rather than
  screenshots, so they stay sharp at any density and cost no bandwidth.
- **Accessibility.** Semantic landmarks, one `h1` per page with no skipped
  levels, a skip link, visible focus rings, an accordion wired with
  `aria-expanded`/`aria-controls`, labelled carousel controls, and alt text on
  every image. Verified with axe-core; the only remaining contrast flags are
  decorative — the 8%-opacity watermark numerals and the tiny labels inside the
  illustrative mockups. Both are `aria-hidden`, so assistive tech never reaches
  them, and WCAG 1.4.3 exempts text that is pure decoration.
- **Performance.** ~106kB first-load JS. Only the navbar, testimonial carousel,
  FAQ accordion and reveal wrapper are client components; everything else is
  server-rendered.

## Checks

With the dev server running:

```bash
npm run verify              # images, duplicate ids, heading order, axe, console
npm run check:interactions  # nav, FAQ, carousel, mobile menu
npm run check:overflow      # horizontal overflow from 320px to 1920px
npm run shots               # screenshots at five viewports into /tmp/hero
```
