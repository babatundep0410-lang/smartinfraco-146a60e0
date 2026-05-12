# Smart Infraco — "Continental Scale" Redesign

A full visual + interaction overhaul executed in the spirit of Fireart × Onix Systems, tuned for a telecom infrastructure operator. Brand palette (deep navy `225 73% 20%`, blue `204 58% 51%`, lime `95 75% 52%`) is **preserved**. All existing copy, pages, and IA stay intact — every change is presentational, motion, hierarchy, layout, and component-level.

---

## Creative Direction

**Theme:** *"The fabric beneath Ghana's digital economy."* Fibre, light, and data as visual language — luminous lines, layered depth, quiet precision.

**Voice through design:**
- Cinematic but disciplined — generous negative space, occasional dense data moments
- Layered depth via gradient washes, soft glow, glass surfaces over dark navy
- Motion that *reveals structure* rather than decorates (line-draw, parallax, scrub-linked counters)
- Editorial typography hierarchy — display headlines feel printed, body feels engineered

---

## Visual System (foundation — built first)

**Typography**
- Display: **Space Grotesk** (geometric, technical edge) for H1/H2/eyebrows
- Body: **Inter** retained, tightened tracking and refined scale
- New scale: `display-2xl` (clamp 56–96px), `display-xl`, `display-lg`, `h1`–`h6`, plus `eyebrow` (uppercase, tracked, lime accent)
- Numerals: tabular-nums everywhere stats appear

**Color tokens (additive — palette unchanged)**
- `--surface-1` / `--surface-2` / `--surface-glass` (translucent navy with backdrop-blur)
- `--grid-line` (low-opacity blue) for blueprint backgrounds
- `--gradient-aurora` (navy → blue → lime, rare hero use)
- `--gradient-mesh` (radial blue glows over navy)
- `--glow-primary` / `--glow-accent` (box-shadow tokens)

**Spacing & containers**
- 8pt scale, sections breathe at `py-32 lg:py-40`
- New `container-tight` (max-w-5xl) for editorial reading; `container-wide` for data
- Restore `--radius` to subtle `0.25rem` for cards (still architectural, less brutalist)

**Reusable primitives (new in `src/components/ui-system/`)**
- `Eyebrow` — lime uppercase label with leading dash
- `GradientText` — aurora gradient on display headings
- `GlassCard` — backdrop-blur surface with hairline border + glow on hover
- `GridBackdrop` — SVG blueprint grid with radial fade
- `NetworkCanvas` — animated nodes/edges (Framer Motion + SVG, lightweight)
- `MarqueeRow` — infinite-scroll partner/sector strip
- `RevealOnScroll` — IntersectionObserver wrapper, staggered children
- `MagneticButton` — subtle cursor-attract CTA
- `AnimatedCounter` — scrub-linked stat counters
- `SectionDivider` — luminous hairline transition between sections

---

## Section-by-Section Redesign

### Navigation
- Slimmer 64px bar, glass surface (`backdrop-blur-xl bg-card/70`), hairline bottom border that brightens on scroll
- Logo lockup right-sized (currently 180–216px, way too tall) — reduce to 40–48px and pair with wordmark
- Mega-menu redesigned: 2-column with iconography per service, "Featured" tile (e.g. Tier III Accra) with image, animated underline indicator
- Sticky scroll-progress hairline in brand gradient
- Mobile: full-screen drawer with staggered link entrance

### Hero (Index)
- Full-viewport immersive scene: layered video/parallax of fibre + a live `NetworkCanvas` overlay (animated Ghana map with pulsing PoP nodes)
- Eyebrow → oversized display headline with one word in `GradientText` → concise sub → dual CTA (primary + ghost "Watch the network")
- Right rail: live-feel "Network Status" glass card (uptime %, PoPs lit, traffic Gbps — static values, animated counters)
- Scroll cue with vertical line draw

### Trust strip
- New marquee of partner/sector logos under hero, monochrome with hover restore to color

### Services overview (home)
- Replace static cards with **bento grid** (2-3-2 asymmetric): Connectivity (large), Data Centres, Cloud, Cybersecurity
- Each card: gradient mesh bg, icon in glass chip, hover reveals secondary detail + arrow magnetism

### Network / Infrastructure presentation
- Dedicated dark section: animated SVG of Ghana with backbone routes drawing in on scroll, PoP nodes pulse, latency labels appear
- Side legend with togglable layers (National Backbone, Metro Fibre, Data Centres) — visual only, no data wiring needed

### Statistics
- Full-bleed dark band with `GridBackdrop`
- Four oversized counters (tabular display font), thin dividers, eyebrow above each
- Counters animate when in view; subtle aurora glow behind active number

### Service detail pages (Connectivity, Data Centres, Cloud, Cybersecurity)
- Editorial hero: eyebrow + display headline + reading-width intro + key spec chips
- "Capabilities" section as tabbed accordion or sticky-scroll feature list (left sticky title, right scrolling features)
- Spec table redesigned as glass cards with metric + label
- "How it works" horizontal scroll-snap timeline
- Cross-sell footer: 2 related services as glass cards

### About / Company story
- Editorial vertical rhythm: oversized quote pull, timeline of milestones (sticky-year column), leadership grid with hover lift
- Mission section split layout with image collage + tracked eyebrow narrative

### Industries
- Sector grid as image-masked cards, hover reveals use-case bullets via mask wipe

### Media (News, Articles, Videos, Events)
- Featured hero post + magazine-style grid with category chips
- Hover: image zoom + title underline draw
- Video page: dark cinema mode, large featured player, thumbnail rail

### Contact experience
- Split: left = brutalist editorial headline + contact methods as interactive rows (mailto/tel with copy-on-click)
- Right = floating glass form with floating labels, inline validation states, animated submit button (idle → loading → check)
- Replace map placeholder with stylized dark-themed SVG of Accra coordinates with pulsing pin (Google embed optional later)

### Footer
- Dark with `GridBackdrop`, lime hairline top edge
- Restructured: oversized wordmark, 4 link columns, contact, newsletter capture, locale/social row
- Tiny live status indicator (green dot — "All systems operational")

### CTAs
- Primary: solid blue, magnetic, arrow that translates on hover
- Secondary: ghost with lime underline draw
- Tertiary text links: `story-link` underline animation

### Page transitions
- Framer Motion route wrapper: 250ms fade + 8px rise, hero elements stagger in
- Section reveals via `RevealOnScroll` with 60ms stagger

---

## Motion & Interaction Language

- **Easing:** custom `[0.22, 1, 0.36, 1]` (expo-out feel) as the house curve
- **Durations:** micro 150ms, standard 300ms, hero 600–900ms
- **Scroll:** IntersectionObserver reveals + a few scrub-linked moments (counters, map line-draw)
- **Cursor:** magnetic primary CTAs only (not site-wide custom cursor — keeps it pro)
- **Hover:** lift + glow on cards, underline-draw on links, icon translate on CTAs
- Respect `prefers-reduced-motion` — disable parallax + counters

---

## Mobile-First Considerations

- Hero collapses to stacked: headline → CTAs → status card below, network canvas becomes static gradient illustration
- Bento grid → single column with preserved hierarchy (large card stays first)
- Mega-menu → full-screen sheet with sectioned accordions
- All horizontal scroll-snap rails work natively on touch
- Type scale uses `clamp()` so display headlines never overflow
- Touch targets ≥ 44px, sticky bottom CTA bar on service pages

---

## Implementation Order (Lovable-friendly, section-by-section)

1. **Foundation** — extend `index.css` + `tailwind.config.ts` with new tokens, fonts, easings, animations; add `ui-system/` primitives
2. **Layout shell** — new Navbar, Footer, page transition wrapper
3. **Home (Index)** — hero, trust marquee, bento services, network section, stats, CTA band
4. **Service pages** (4) — shared editorial template
5. **About, Industries, Contact** — editorial + interactive form
6. **Media pages** (News, Articles, Videos, Events) — magazine layouts
7. **QA pass** — responsive (1920/1280/834/390), reduced-motion, contrast

---

## Technical Notes

- All animation via **Framer Motion** (already installed) + CSS — no GSAP, no WebGL
- Network canvas: SVG + Framer Motion (`motion.path` with `pathLength`), ~30 nodes max for perf
- Marquee: pure CSS `@keyframes` translate, GPU-friendly
- Glass surfaces: `backdrop-blur` with fallback solid for older browsers
- Fonts loaded via `@import` in `index.css` with `display=swap`
- No new dependencies required
- Brand HSL values in `index.css` untouched — only additive tokens

---

## What stays exactly as-is

- Brand palette (navy, blue, lime)
- All page routes and IA
- All copy, service descriptions, stats, contact details
- React Router structure, shadcn/ui base, Tailwind setup

---

Shall I proceed with **Phase 1 (Foundation + Layout shell + Home redesign)** in this turn, then continue with service/inner pages in the next? That keeps each step reviewable in preview.