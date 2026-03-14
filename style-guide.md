# JJ Haircare - Style Guide & Design System

This document outlines the core design tokens, layout patterns, styling rules, and recent layout additions used throughout the JJ Haircare website.

## 1. Color Palette

The color system relies on a luxurious, earthy, and natural palette customized in Tailwind CSS v4 (`src/app/globals.css`).

**Primary Colors:**
- `jj-black`: `#0A0A0A` - Used for heavy backgrounds, footer, headers, and stark contrasts.
- `jj-charcoal`: `#1A1A1A` - Used for softer body text, subtitles, and dark elements that shouldn't be pitch black.
- `jj-ivory`: `#F7F2EC` - The core light background color, giving a soft, natural cream feel. Used as the main body background.
- `jj-white`: `#FFFFFF` (Default) - Used for cards, overlays, and max contrast against dark backgrounds.

**Accent & Brand Colors:**
- `jj-nude`: `#C4A882` - Primary accent color, used for links, highlights, primary buttons, and active states.
- `jj-nude-pink`: `#D4B5A0` - Secondary accent, used in gradients.
- `jj-sand`: `#CEAD8A` - Warm, earthy mid-tone.
- `jj-rose`: `#C9A99B` - Deep, natural pinkish hue for subtle background blur effects.
- `jj-gold`: `#B8964E` - Elegant highlight color used for hover states, icons, premium accents, and mono eyebrow text.
- `jj-olive`: `#7A8B6F` - Natural, botanical green used for special text accents (e.g., italicized keywords) and alternate buttons.

**Gradients:**
- `bg-gradient-nude`: A linear gradient `(135deg, jj-ivory 0%, jj-nude-pink 100%)`. Used for the Hero, Testimonials, Ingredients, and FAQ sections to provide a soft, luxurious background sweep.

## 2. Typography

The site uses a dual-font system, leveraging Google Fonts configured via CSS variables.

**Font Families:**
- **Serif** (`var(--font-playfair)`): Playfair Display. Used exclusively for headings, brand name, and pull-quotes to convey luxury and elegance.
- **Sans-Serif** (`var(--font-inter)`): Inter. Used for body copy, buttons, roles, and functional UI text for maximum readability and a clean, modern aesthetic.

**Custom Typography Utilities:**
Defined in `globals.css` to ensure consistent scaling across devices:
- `heading-xl`: `clamp(3rem, 8vw, 6rem)`, line-height: `1.1`, tracking: `-0.02em`
- `heading-lg`: `clamp(2.5rem, 5vw, 4rem)`, line-height: `1.1`, tracking: `-0.02em`
- `heading-md`: `clamp(2rem, 4vw, 3rem)`, line-height: `1.2`

**Common Typography Patterns:**
- **Section Headings:** `font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black`. Often pairs with a bold main word and an italicized accent word (e.g., `<span className="italic text-jj-nude">` or `text-jj-olive`).
- **Eyebrow Text / Roles / Small Labels:** `font-mono text-xs text-jj-gold uppercase tracking-widest` or `text-sm uppercase tracking-[0.2em]`.
- **Body Text:** `font-sans text-jj-charcoal/70 font-light text-lg`.
- **Prose (Legal/Content Pages):** Standard HTML elements inside `prose prose-lg text-jj-charcoal/80 font-sans prose-headings:font-serif prose-headings:text-jj-black prose-a:text-jj-nude hover:prose-a:text-jj-gold`.

## 3. Cards & Container Patterns

**"Glassmorphism" / Rounded Translucent Cards:**
A core pattern for displaying items (Team, Products, Ingredients, Contact Form, FAQs) over gradients:
- **Base Classes:** `bg-white/70 backdrop-blur-md border border-jj-black/5 rounded-[2rem] p-6` (or `p-8` / `p-12`)
- **Hover State (Link/Button Cards):** `hover:bg-white hover:-translate-y-2 hover:shadow-md transition-all duration-500`

**Bento Box Grid (Ingredients):**
- Uses a CSS Grid layout with varying row and column spans to create dynamic, editorial layouts.
- Grid base: `grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[400px] md:auto-rows-[450px]`
- Items dynamically use classes like `md:col-span-2 md:row-span-2` for larger feature items.

**Accordion Cards (FAQ):**
- Uses standard Glassmorphism base (`bg-white/70 backdrop-blur-md rounded-[2rem]`).
- Includes a circular chevron button that rotates `180deg` and changes color to `bg-jj-nude` when active.
- Content body uses `AnimatePresence` for smooth height expansion.

## 4. Image & Media Patterns

**Grayscale to Color Hover Reveal:**
A core interaction pattern to add a premium feel to images:
- **Default (Mobile/Desktop base):** `w-full h-full object-cover`
- **Desktop Hover Logic:** `md:grayscale md:mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700`
- *(Note: Mobile devices default to full color without hover states for better UX).*

**Avatars (Team Section):**
- Circular clipping with a hidden expanding border.
- Container: `w-32 h-32 rounded-full overflow-hidden border border-jj-olive/50 relative`
- Hover Border Reveal: `absolute inset-0 border-[3px] border-jj-gold rounded-full scale-100 opacity-100 md:scale-110 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 transition-all duration-500`

## 5. Buttons & Form Interactions

**Solid Primary Buttons:**
- **Dark Theme (Solid Navbar/Hero):** `bg-jj-nude hover:bg-jj-gold text-jj-black font-medium rounded-full uppercase tracking-wider text-sm transition-all`
- **Light Theme/Olive:** `bg-jj-olive border border-jj-olive hover:border-jj-gold text-white hover:bg-transparent hover:text-jj-black rounded-full font-serif transition-colors`
- **Standard Submit/Action:** `bg-jj-black hover:bg-jj-olive text-white font-medium rounded-full px-8 py-4 uppercase tracking-wider text-sm transition-all`

**Card "Add to Cart" / "View Details" Hover Buttons:**
- Slide-up reveal within product cards.
- **Classes:** `absolute bottom-6 left-6 right-6 bg-jj-black text-white font-sans font-bold py-4 rounded-xl translate-y-0 opacity-100 lg:translate-y-20 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 hover:bg-jj-gold`

**Forms & Inputs:**
- Underline style (no full border box).
- `w-full bg-transparent border-b border-jj-black/20 pb-3 text-jj-black focus:outline-none focus:border-jj-nude transition-colors placeholder:text-jj-black/30`

## 6. Layout & Spacing

**Global Layout Structure:**
- The site leans heavily on generous whitespace and large padding.
- **Section Padding:** Typically `pt-32 pb-24` for standard content pages (like FAQ, Shipping) to clear the fixed navbar.
- **Container Boundaries:** `container mx-auto px-6 md:px-12` or `max-w-7xl mx-auto` to constrain maximum width and provide healthy side margins on mobile.

## 7. Animation & Transitions

Built extensively with `framer-motion`:
- **Scroll Reveals:** Almost all text elements stagger into view when scrolled into the viewport.
  - Pattern: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}` (use `whileInView` for scroll triggers).
- **Parallax & 3D (Hero):** Uses `useMotionValue`, `useSpring`, and `useTransform` tied to `onMouseMove` to tilt text and shift background elements in 3D space.
- **Animated Counters:** Uses `framer-motion` `useSpring` and `Intl.NumberFormat` to count up from zero. Uses `useInView({ once: false })` to reset to zero and re-animate every time it enters the viewport.
- **Hamburger Menu:** Uses `clipPath: "circle(0% at ...)"` to `clipPath: "circle(150% at ...)"` for an elegant, expanding circular reveal.

## 8. SEO & Data Standards
- **Global Metadata:** Next.js `metadata` object in `layout.tsx` handles fallback titles, OpenGraph images, and default descriptions.
- **Structured Data:** Product pages utilize `application/ld+json` injecting Schema.org `Product` data for rich snippets in Google Search results.

## 9. Responsive Breakpoints

Tailwind's default breakpoints are utilized strictly with a mobile-first approach:
- `default`: Mobile (Stack layouts, full color images, default to `auto-rows` or simple flex columns, visible buttons).
- `md` (768px): Tablet (Start introducing multi-column grids like `grid-cols-2`, adjust typography padding, introduce hover effects).
- `lg` (1024px): Desktop (Full grid layouts like `grid-cols-4`, complex horizontal navigation, fully activate grayscale-to-color hover states).
- `xl` (1280px): Large screens (Expand text to maximum clamp sizes).