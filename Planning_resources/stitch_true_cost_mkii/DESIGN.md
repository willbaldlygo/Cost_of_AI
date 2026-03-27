# Design System Document: Editorial Organicism

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Diorama."** 

This system moves away from the sterile, pixel-perfect rigidity of traditional SaaS dashboards toward a tactile, graphic-led editorial experience. It mimics the physical layering of a paper-cut collage—where "The True Cost of AI" is presented not as a spreadsheet, but as a curated story. We achieve this by blending a "Woodland in Summer" palette with intentional asymmetry, irregular container edges, and high-contrast typography scales. 

The goal is to make the user feel as though they are interacting with a physical field journal that has been digitized. We break the template look by avoiding standard grid alignments in favor of overlapping "cut paper" cards and varying tonal depths that guide the eye through narrative flow rather than functional habit.

---

## 2. Colors
The palette is rooted in the depth of a sun-drenched forest. We use deep greens for authority, earthy browns for grounded data, and sun-dappled yellows/sky blues for highlights and interactive moments.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts. For example, a `surface-container-low` (#f7f3e9) section should sit directly against a `surface` (#fdf9ef) background. This creates a soft, organic transition that mimics the way light hits different planes of paper.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to define "altitude":
*   **Base:** `surface` (#fdf9ef)
*   **Recessed Sections:** `surface-container-low` (#f7f3e9)
*   **Primary Content Cards:** `surface-container` (#f1eee4)
*   **Elevated/Interactive Elements:** `surface-container-highest` (#e6e2d8)

### The "Glass & Gradient" Rule
To add "soul," use subtle gradients (e.g., `primary` #17340e to `primary_container` #2d4b22) for high-impact CTAs. For floating navigation or modal overlays, apply **Glassmorphism**: use semi-transparent surface colors with a `backdrop-blur` of 12px–20px to allow the woodland colors to bleed through.

---

## 3. Typography
We use a high-contrast pairing to balance clean readability with an organic, "hand-designed" character.

*   **Display & Headlines (Epilogue):** This typeface provides the "graphic-led" punch. It is clean but has a weight and geometry that feels architectural. Use `display-lg` (3.5rem) for hero statements to demand attention.
*   **Titles & Body (Manrope):** A highly legible sans-serif with a friendly, modern warmth. It bridges the gap between the bold headlines and the technical data.
*   **Labels (Space Grotesk):** Used for data points and small captions. Its slightly quirky, technical character reflects the "AI" aspect of the subject matter while remaining "modern."

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** and the **"Cut Paper"** aesthetic.

### The Layering Principle
Do not use shadows to create hierarchy by default. Instead, "stack" surface tiers. A `surface-container-lowest` (#ffffff) card placed on a `surface-container` (#f1eee4) background provides a natural, crisp "lift."

### Irregular Edges & Cut Paper
To reinforce the hand-made feel, containers should not be perfect rectangles. Apply slightly irregular border-radii (e.g., `top-left: 0.25rem`, `top-right: 0.75rem`, `bottom-left: 0.5rem`, `bottom-right: 0.35rem`) to mimic hand-cut cardstock.

### Ambient Shadows
When a card must "float" (e.g., on hover), use an extra-diffused shadow:
*   **Color:** `on-surface` (#1c1c16) at 6% opacity.
*   **Blur:** 24px - 40px.
*   **Y-Offset:** 8px.
This mimics natural, soft ambient light rather than a harsh digital drop shadow.

### The "Ghost Border" Fallback
If contrast is legally required for accessibility, use a "Ghost Border": the `outline-variant` token (#c3c8bc) at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** Fill with `primary` (#17340e). Use `on_primary` (#ffffff) for text. Shape should be slightly irregular or use the `full` (9999px) pill shape to contrast with the sharp "cut paper" cards.
*   **Secondary:** Fill with `secondary_container` (#fec391). This provides the "sun-dappled" highlight.
*   **Hover State:** Shift background to one tier darker and increase the ambient shadow blur.

### Cards & Lists
*   **Forbid Divider Lines:** Separate list items using vertical white space (use Spacing `4` or `6`) or by alternating background tints between `surface-container` and `surface-container-low`.
*   **Interaction:** On hover, cards should slightly "tilt" (1-2 degrees) to emphasize the loose, hand-placed paper aesthetic.

### Input Fields
*   **Style:** Minimalist. No bottom line. Use a `surface-container-highest` (#e6e2d8) background with a `label-md` (Space Grotesk) floating above it.
*   **Error State:** Use `error` (#ba1a1a) text with an `error_container` (#ffdad6) soft background glow.

### Custom Component: The "Impact Badge"
For data points (like CO2 or Water usage), use high-contrast chips using `tertiary_container` (#c7a938) with `on_tertiary_container` (#4d3e00) to pull the eye toward the "Cost" metrics.

---

## 6. Do's and Don'ts

### Do:
*   **Overlap Elements:** Allow images or "cut paper" cards to slightly overlap section boundaries to break the "webpage" feel.
*   **Use Generous White Space:** Use the Spacing Scale `16` (5.5rem) and `20` (7rem) to let the editorial content breathe.
*   **Tint Your Shadows:** Always use a hint of the woodland colors in your shadow box-shadows to keep the palette cohesive.

### Don't:
*   **Don't use #000000:** Use `on_background` (#1c1c16) for text to keep the "organic" feel. Pure black is too harsh for this woodland palette.
*   **Don't use Perfect Circles:** Except for radio buttons, try to use "squarcles" or slightly irregular pills to maintain the hand-made aesthetic.
*   **Don't Center Everything:** Use asymmetrical layouts. Align a heading to the left (column 2) while the body text sits in the center (column 4) to create a dynamic, magazine-style rhythm.

### Accessibility Note:
Ensure that `on_surface_variant` (#43483f) is only used for decorative text or large labels, as it may not pass AA contrast for small body text on all surface containers. Always default to `on_surface` (#1c1c16) for critical readability.