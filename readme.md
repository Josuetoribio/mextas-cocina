# MEXTAS — Design System

Design system for **MEXTAS · Cocina Contemporánea**, a fictional fine-dining restaurant in San Pedro Garza García, N.L. Mextas (the digital agency) uses it as a portfolio demo. The restaurant should read as an independent brand. Mextas as developer shows up only as a discreet line in the footer.

**Sources:** the files the user uploaded (in `uploads/`):
- `ejemplo restaurante.png`: the main visual reference, copied to `assets/reference/`
- `Portada.png`: hero image of a filet with mushrooms, copied as `assets/img/hero-rib-eye.png`
- `rib eye.png`, `burrata.png`, `pulpo al olivo.png`, `esfera de chocolate.png`: dish photos
- `imagen inferior.png`: panoramic photo of the dining room, copied as `assets/img/interior.png`

No codebase, Figma file or logo was provided.

The brief asked for Next.js, TypeScript, Tailwind and Framer Motion. This environment builds in HTML with React, so the UI kit is a React click-through that uses CSS tokens instead. Porting it to Next.js is straightforward: tokens become `@theme`/CSS variables, components map 1:1, and the data in `data.js` becomes `lib/data.ts`.

## CONTENT FUNDAMENTALS
- **Language:** Spanish (es-MX). The copy speaks to the guest as **tú** ("pensado para ti", "Reserva tu mesa"). The restaurant speaks as **nosotros** ("No cocinamos solamente para alimentar").
- **Tone:** editorial, calm and sensory. Sentences are short and headlines end with a period ("Sabores que trascienden."). No exclamation marks, no hype and no marketing superlatives beyond one quiet one.
- **Casing:** eyebrows, labels, nav and buttons are UPPERCASE with wide letter-spacing. Headlines use sentence case in the serif font, with an italic word for emphasis ("Una cocina con *identidad*").
- **Dishes:** the name is in title case ("Pulpo al Olivo"). The description is a comma-separated list of ingredients. Prices look like `$220`, with no decimals and no "MXN".
- **Feedback:** reassuring and specific ("Tu solicitud de reservación ha sido registrada.", "Te enviaremos una confirmación a tu correo electrónico."). Error messages tell the guest what to do ("Ingresa un correo válido").
- **No emoji, no star ratings, no Lorem ipsum.**

## VISUAL FOUNDATIONS
- **Color:** near-black and charcoal (`--mx-black`, `--mx-charcoal`) alternate with warm cream (`--mx-cream`, `--mx-ivory`). Soft gold `#C9A06A` is the only accent. On light backgrounds use `--mx-gold-deep` so text keeps enough contrast. Amber, brown and deep green are supporting colors only. Nothing is saturated.
- **Rhythm:** sections alternate dark and light: hero (black), value band (charcoal), menu (cream), chef (ivory), story (black), and so on.
- **Type:** Cormorant Garamond (400–500) for display text, dish names and figures. Jost (300–500) for body text, labels and buttons. The wordmark "MEXTAS" is set in the serif with 0.42em tracking, above the tagline "COCINA CONTEMPORÁNEA" in small tracked sans.
- **Imagery:** low-key and warm, like candlelight. Dark stoneware on black marble, heavy vignetting, no cool tones. Photos are full-bleed or run to the grid edge. Keep the natural color with no filters (brightness drops only on hover).
- **Protection gradients:** the hero uses a left-to-right black gradient plus a bottom fade, so text sits in the negative space. Cards over photos use a bottom-up black gradient. There are no text capsules.
- **Corners:** square (0) everywhere. Circles are used only for icon chips, favorite buttons and status dots.
- **Borders:** 1px hairlines (`--line-dark` / `--line-light`) separate columns, rows and tabs. Gold hairlines mark the active or selected state.
- **Shadows:** almost none. Cards are flat at rest. On hover they get `--shadow-card` and lift 4–6px. Modals use a deep, soft `--shadow-modal`.
- **Cards:** dish cards sit on `--surface-card-light` with a 16:10 photo, a serif name, a muted description and the price. Experience cards are tall photo cards on charcoal that reveal extra detail on hover.
- **Motion:** slow editorial ease (`cubic-bezier(.16,1,.3,1)`). Sections reveal with an 18px fade-up. Images zoom to 1.045 over 1.4s on hover. The hero has a scale-in on load and a subtle parallax (0.14). Underlines draw from left to right. Button arrows nudge 4px. Nothing bounces. `prefers-reduced-motion` is respected.
- **Hover:** gold fills lighten to `--mx-gold-soft`. Outline buttons fill with gold. Links turn gold. **Press:** scale(.98).
- **Transparency and blur:** only on the sticky nav once the page scrolls (80% black with a 14px blur), on modal overlays, and on icon chips placed over photos.
- **Layout:** 1280px container with a fluid gutter and section padding of `clamp(72px,10vw,140px)`. Editorial layouts are asymmetric (7/5 splits, masonry). On mobile, layouts are recomposed rather than scaled down: the menu becomes a horizontal snap carousel, the hero image stacks above the text, and a fixed "Reservar mesa" bar appears.

## ICONOGRAPHY
- **Lucide** is loaded from CDN (`lucide@0.460.0` UMD) and rendered through the `Icon` component with thin strokes (1–1.5). Icons are never filled, except the favorite heart when it is active.
- Common icons: arrow-right, map-pin, clock, calendar, phone, mail, leaf, flame, wine, hand-heart, chef-hat, heart, x, menu, instagram, facebook, twitter (stands in for X).
- No emoji. The only unicode used is "→", "·" and "×" in small UI details.
- **No logo was provided.** The brand appears as the typographic wordmark (`Wordmark` component). No logo mark was drawn.

## Fonts
Cormorant Garamond and Jost load from Google Fonts. They were chosen to match the reference image, since no font files were provided. **Send the final font files if the brand uses different ones.**

## Index
- `styles.css`: entry point that imports `tokens/*.css` (colors, typography, spacing, motion, fonts, base)
- `guidelines/`: foundation cards (Colors, Type, Spacing, Brand)
- `components/`
  - `brand/`: Wordmark, Icon
  - `actions/`: Button, IconButton
  - `forms/`: Input, Select, Textarea, ChoiceChip
  - `navigation/`: Tabs, NavLink
  - `content/`: SectionHeader, DishCard, Stat, ValueProp
  - `feedback/`: Modal, Toast, StatusBadge
- `ui_kits/website/`: full interactive site (`index.html` plus section JSX files and `data.js` with the mock data)
- `assets/img/`: official photos. `assets/reference/`: the visual reference image.
- `SKILL.md`: agent skill manifest

### Intentional additions
There was no component source, so this is a standard set sized for the brand. `ChoiceChip` covers availability slots. `StatusBadge` covers the "Abierto ahora" indicator.
