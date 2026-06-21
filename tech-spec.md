# Sunflower Designs — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0.0 | UI framework |
| `react-dom` | ^19.0.0 | DOM renderer |
| `react-router-dom` | ^7.0.0 | Client-side routing (6 pages) |
| `three` | ^0.172.0 | WebGL renderer for sunflower hero |
| `@types/three` | ^0.172.0 | TypeScript types for Three.js |
| `gsap` | ^3.12.7 | Animation engine (tweens, timelines, ScrollTrigger, Flip) |
| `lenis` | ^1.2.3 | Smooth scroll with momentum |
| `splitting` | ^1.1.0 | Text character splitting for reveal animations |
| `imagesloaded` | ^5.0.0 | Image preload detection |
| `@types/imagesloaded` | ^5.0.0 | TypeScript types for imagesloaded |
| `lucide-react` | ^0.474.0 | Icon library |
| `tailwindcss` | ^4.0.0 | Utility-first CSS |
| `@tailwindcss/vite` | ^4.0.0 | Tailwind Vite integration |
| `vite` | ^6.3.0 | Build tool |
| `@vitejs/plugin-react` | ^4.4.0 | React Vite plugin |
| `typescript` | ^5.7.0 | Type system |
| `@types/react` | ^19.0.0 | React type definitions |
| `@types/react-dom` | ^19.0.0 | ReactDOM type definitions |

---

## Component Inventory

### Layout (shared across all pages)

| Component | Source | Notes |
|-----------|--------|-------|
| `Header` | Custom | Fixed, scroll-shrink behaviour, 3-column layout. Contains `MegaMenu` and `CollectionsDropdown`. |
| `MegaMenu` | Custom | Full-width 3-column dropdown (Shop). Rendered inside `Header`. |
| `CollectionsDropdown` | Custom | Single-column dropdown. Rendered inside `Header`. |
| `MobileMenu` | Custom | Full-screen overlay. Rendered inside `Header`. |
| `Footer` | Custom | 3-column grid, used on all pages. Contains newsletter mini-form. |
| `CustomCursor` | Custom | Global 8px dot with lerp tracking. Renders at app root. Hidden on touch devices. |
| `PageTransitionWrapper` | Custom | Wraps route content, orchestrates exit/enter fade via GSAP. |

### Page Sections (one-time use, page-specific)

**Homepage:**

| Section | Notes |
|---------|-------|
| `SunflowerHero` | Full-viewport WebGL canvas + text overlay. Owns Three.js lifecycle. |
| `FeaturedCollection` | 4-column product grid. |
| `DesignerStory` | 2-column: portrait image + text. |
| `Craftsmanship` | Full-width background image with dark gradient overlay. |
| `InstagramGallery` | 3×2 image grid with hover overlay. |
| `Testimonials` | 3-column testimonial cards. |
| `Newsletter` | Email capture with inline submit. Deep Espresso background. |

**Shop:**

| Section | Notes |
|---------|-------|
| `ShopHeader` | Page title + category filter tabs. |
| `FeaturedBanner` | 2-column image + text promotional banner. |
| `ProductGrid` | 4-column product grid (8 cards + pagination). Reuses `ProductCard`. |
| `Pagination` | Centred page number buttons. |

**Collection:**

| Section | Notes |
|---------|-------|
| `CollectionHero` | Full-viewport background image with text overlay. |
| `CollectionStory` | Single-column centred narrative text. |
| `KeyPieces` | Alternating 2-column image/text layout (3 pieces). |
| `LookbookGallery` | Masonry-style 3-column image grid on dark background. |
| `ShopTheCollection` | 4-column product grid. |

**Product Detail:**

| Section | Notes |
|---------|-------|
| `ProductHero` | 2-column: image gallery (main + thumbnails) + product info panel. |
| `ProductDetailsTabs` | 3-tab panel (Description / Details & Care / Shipping). |
| `CompleteTheLook` | 3-column product grid. |
| `YouMayAlsoLike` | 4-column product grid. |

**About:**

| Section | Notes |
|---------|-------|
| `AboutHero` | Full-viewport background image with text overlay. |
| `FarahsStory` | Single-column long-form narrative. |
| `Process` | 4-column step cards with SVG icons. |
| `Studio` | Full-bleed 2-column: image + text. |
| `Values` | 3-column value cards on dark background. |
| `PressRecognition` | Centred text-based press logos row. |

**Contact:**

| Section | Notes |
|---------|-------|
| `ContactHero` | Page title with subheadline. |
| `ContactForm` | 4-field form (name, email, subject dropdown, message textarea). |
| `ContactInfo` | 3-column grid (email, studio address, social). |
| `FAQ` | 5-item accordion with single-open behaviour. |
| `NewsletterCompact` | Condensed email + button row on dark background. |

### Reusable Components

| Component | Used By | Notes |
|-----------|---------|-------|
| `ProductCard` | FeaturedCollection, ProductGrid, ShopTheCollection, CompleteTheLook, YouMayAlsoLike | Image (3:4), Quick View overlay on hover, name + price. |
| `SectionHeader` | ~10 sections | Overline (Caption) + headline (variable Display size). Integrates `AnimatedHeadline`. |
| `AnimatedHeadline` | All sections with scroll-triggered headlines | Wraps Splitting.js + GSAP ScrollTrigger for character-by-character reveal. |
| `ScrollReveal` | All content sections below hero | Generic wrapper: fade-up (translateY + opacity) with ScrollTrigger. Configurable stagger. |
| `CTAButton` | Throughout | Dark Taupe bg, hover → Sunflower Gold. 3 style variants (filled, outlined on dark, gold-on-dark). |
| `NewsletterForm` | Homepage Newsletter section, Footer | Email input + submit. Success state swap. |
| `ImageGallery` | ProductHero | Main image + thumbnail strip. Click to swap main image. |
| `TabPanel` | ProductDetailsTabs | Horizontal tabs + content panel with fade transition. |
| `Accordion` | FAQ | Single-open accordion with height-auto animation. |

### Hooks

| Hook | Purpose |
|------|---------|
| `useLenis` | Initializes Lenis, connects to GSAP ScrollTrigger, handles route-change scroll reset. Single instance at app root. |
| `useScrollReveal` | Attaches GSAP ScrollTrigger fade-up to a ref. Configurable direction, delay, stagger. |
| `useCustomCursor` | Tracks mouse position with lerp interpolation, handles hover expansion on interactive elements. |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| WebGL sunflower seed effect | Three.js (raw) | Custom `Seed` class (PlaneGeometry + MeshBasicMaterial), `Scene` class with manual rAF loop. Golden-angle Fibonacci distribution, cursor repulsion, click scatter, dblclick attraction. Instanced-like array of 700 seed meshes. | **High** 🔒 |
| Scroll-triggered character reveal | Splitting.js + GSAP ScrollTrigger | `AnimatedHeadline` splits text into char spans, GSAP animates opacity with stagger. `once: true`. | Medium |
| Section entrance (fade-up) | GSAP ScrollTrigger | `ScrollReveal` wrapper: translateY(40→0) + opacity, configurable stagger. Applied to all non-hero sections. | Low |
| Product card hover | CSS transitions | Pure CSS: `transform: scale(1.05)` on image, opacity on Quick View bar. No JS needed. | Low |
| Page transitions | GSAP | `PageTransitionWrapper`: exit timeline (opacity 1→0, 0.2s), enter timeline (opacity 0→1, 0.3s, 0.1s delay). Triggered on route change. | Medium |
| Header scroll shrink | CSS + JS listener | Scroll listener toggles class at 100px threshold. CSS handles height, background, backdrop-filter transitions (0.3s). | Low |
| Mega menu / dropdown open | CSS transitions | translateY(-10→0) + opacity. CSS-only, triggered by React state. | Low |
| Custom cursor | rAF + lerp | `useCustomCursor`: rAF loop with 0.08 lerp factor. Position update via ref (not state) for 60fps. Hover expansion via event delegation. | Medium |
| Newsletter input focus | CSS transitions | Border-bottom colour transition. Pure CSS `:focus` pseudo-class. | Low |
| Seed texture loading | imagesloaded | Preload all 8 seed PNGs before starting rAF loop. Prevents pop-in. | Low |
| Mobile menu overlay | CSS transitions | Full-screen slide/fade. CSS-only triggered by React state. | Low |
| FAQ accordion | GSAP or CSS | Height auto animation (0→scrollHeight), chevron rotation. GSAP recommended for smooth height animation. | Low |
| Tab panel content switch | CSS transitions | Opacity fade between panels. CSS-only with `opacity` + `transition`. | Low |
| Thumbnail image swap | CSS transitions | Cross-fade on main image. CSS opacity transition between image layers. | Low |
| Instagram gallery hover | CSS transitions | Overlay opacity + Instagram icon appearance. Pure CSS. | Low |
| Lookbook masonry hover | CSS transitions | `transform: scale(1.02)`. Pure CSS. | Low |
| Scroll indicator loop | CSS animation | `@keyframes` translating a circle down a vertical line, infinite, 1.5s. Pure CSS. | Low |

---

## State & Logic Plan

### WebGL ↔ React Bridge

The sunflower hero is fully imperative (Three.js) and must not trigger React re-renders. Architecture:

- `SunflowerHero` owns a `useRef<HTMLCanvasElement>` and initializes Three.js in `useEffect`
- `Seed` and `Scene` classes are plain TypeScript (not React components), imported by `SunflowerHero`
- All animation state (mousePos, isAttracting, seeds array) lives inside the `Scene` class instance, accessed via refs
- Mouse/click/dblclick listeners attach directly to the canvas element in the `useEffect`
- Cleanup on unmount: dispose all geometries, materials, textures; remove event listeners; cancel rAF
- IntersectionObserver pauses the rAF loop when hero is not in viewport

### Custom Cursor Ref Architecture

Cursor position must update at 60fps without React re-renders:
- Position stored in a `useRef`, applied via `transform` directly on the DOM element
- rAF loop reads latest position and applies it
- Hover detection uses event delegation on `document` for `mouseenter`/`mouseleave` on `[href], button, [role="button"]` — toggles an expanded class
- Hidden on touch devices: detected once on mount via `'ontouchstart' in window`

### Lenis ↔ Router Integration

Lenis must be a single global instance that survives route changes:
- Initialized once at app root (inside `useLenis`)
- On route change: `lenis.scrollTo(0, { immediate: true })` before new page mounts
- ScrollTrigger.update() called on every Lenis scroll event to keep scroll-driven animations in sync
- Lenis destroyed only on full app unmount

### Page Transition Flow

Route changes must be intercepted to play exit animation before unmounting:
- `PageTransitionWrapper` wraps the route outlet
- On navigation intent: play exit timeline → wait for completion → allow route change → play enter timeline
- This requires overriding React Router's default immediate navigation — use a transition state machine (idle → exiting → entering → idle)

### Newsletter Form States

Simple 3-state machine: idle → submitting → success. On success, swap input/button for confirmation message with CSS fade transition.

---

## Other Key Decisions

### Raw Three.js (not React Three Fiber)

The seed effect is a single imperative canvas with custom physics classes, not a declarative 3D scene. R3F's component model would add indirection without benefit. Raw Three.js in a `useEffect` is cleaner and gives direct control over the rAF loop, disposal, and IntersectionObserver pausing.

### Seed Physics: Array of Meshes (not InstancedMesh)

Each seed has unique rotation speed, radial offset, and repulsion state that changes per frame. InstancedMesh requires uniform per-instance data updated via buffer attributes — viable but more complex for 700 seeds with per-seed mutable state. A plain array of individual Mesh objects is simpler and performant enough at this scale.

### Mobile Seed Reduction

Seed count drops from 700 to 400 on mobile (checked via `window.innerWidth < 768` on mount). This is a one-time check, not a reactive breakpoint — re-initializing the entire Three.js scene on resize is expensive.

### No State Management Library

All state is either: local component state (useState), refs for animation values, or simple prop drilling for shared UI state (menu open/closed, active tab). No Zustand/Redux needed — the app is content-driven with minimal shared mutable state.

### Routing

React Router v7 with 6 routes: `/` (Home), `/shop` (Shop), `/collection` (Collection), `/product/:id` (Product Detail), `/about` (About), `/contact` (Contact). No lazy loading needed — the app is small enough to bundle eagerly.
