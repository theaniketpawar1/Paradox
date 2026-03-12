# DESIGN_SYSTEM.md - Design Tokens & Rules

## Typography

**Font Family:** Inter, system-ui, sans-serif (fallback to system fonts)

**Scale (rem):**
- h1: 2.5 (40px) → responsive: 3.5rem at xl
- h2: 2.0 (32px) → responsive: 2.75rem at xl
- h3: 1.75 (28px) → responsive: 2rem at xl
- h4: 1.5 (24px) → responsive: 1.75rem at xl
- h5: 1.25 (20px)
- h6: 1.125 (18px)
- body: 1.0 (16px)
- body-lg: 1.125 (18px)
- caption: 0.875 (14px)
- caption-sm: 0.75 (12px)

**Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Line Height:**
- Headings: 1.2
- Body: 1.6
- Caption: 1.4

## Colors (Light / Dark)

### Primary
- base: #0ea5e9 (sky-500) → adjust for premium feel? maybe deep blue instead: #1e40af or #2563eb
- Consider: Primary brand color should be deep, professional. Let's go with a refined blue: `#1e3a8a` (blue-900) as primary, with lighter blue accents `#3b82f6` (blue-500) for highlights.
- On second thought: AI companies often use deep purple/blue gradients. Let's define:
  - primary: `#6366f1` (indigo-500)
  - primaryDark: `#4f46e5` (indigo-600)
  - primaryLight: `#818cf8` (indigo-400)

But we need premium, trustworthy. Maybe deep blue: `#1e40af` (blue-800) as primary, `#3b82f6` (blue-500) as accent.

Final decision:
- primary: `#1e3a8a` (blue-900)
- primaryHover: `#1e40af` (blue-800)
- accent: `#3b82f6` (blue-500)
- accentHover: `#60a5fa` (blue-400)

### Neutral / Grays
- background: #ffffff (light) / #0f172a (dark slate 900)
- surface: #f8fafc (light) / #1e293b (dark slate 800)
- surfaceHover: #f1f5f9 (light) / #334155 (dark slate 700)
- border: #e2e8f0 (light) / #475569 (dark slate 600)
- text: #0f172a (light) / #f8fafc (dark)
- textMuted: #64748b (light/dark slightly lighter/darker)

### Semantic
- success: #10b981 (emerald)
- warning: #f59e0b (amber)
- error: #ef4444 (red)
- info: #3b82f6 (blue)

## Spacing (rem base, assumes 16px root)
Scale: 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64

Common usage:
- xs: 0.5
- sm: 0.75
- md: 1
- lg: 1.5
- xl: 2
- 2xl: 3
- 3xl: 4
- 4xl: 6

Section vertical padding: 6rem (96px) on mobile, 8rem on desktop.
Container horizontal padding: 1.5rem on mobile, 2rem on desktop.
Gap between grid items: 1.5-2rem.
Gap between form fields: 1rem.

## Border Radius
- sm: 0.25rem (4px)
- md: 0.5rem (8px)
- lg: 0.75rem (12px)
- xl: 1rem (16px)
- full: 9999px

Buttons: md (0.5rem)
Cards: lg (0.75rem)
Inputs: md (0.5rem)

## Shadows
- sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
- lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
- xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)

Cards: md or lg on hover.
Navbar: sm shadow on scroll.

## Z-index Scale
- base: 0
- dropdown: 100
- modal: 1000
- navbar: 500
- tooltip: 1100

## Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Motion
- duration: 150ms (fast), 250ms (normal), 350ms (slow)
- easing: ease-out (default), ease-in-out for larger motions
- transitions: use on hover/focus states; avoid long animations

## Icons
- Use lucide-react or heroicons (SVG)
- Default size: 1.25rem (20px) for inline icons, 1.5-2rem for feature icons
- Color: currentColor or textMuted

## Images
- Max width: 100%
- Lazy load below the fold
- Provide responsive srcset
- Use aspect-ratio container to avoid layout shift: `aspect-ratio: 16/9` etc.
- Optimize with WebP and fallback JPEG

## Focus States
- Button: 2px solid accent (blue-500) outline offset 2px
- Input: ring 2px accent-500 ring-offset-2
- Keep focus indicator visible; no removing default outline without replacement.

## Dark Mode
- Auto from system preference; also toggle possible
- Use CSS variables: --color-bg, --color-surface, --color-text, etc.
- Ensure contrast ratios remain >= 4.5:1 in both modes

## Component-Specific Rules

### Button
- Primary: primary color text on primary background; white text on dark primary bg
- Secondary: transparent with border; hover fills with surfaceHover
- Padding: sm (0.5rem 1rem), md (0.75rem 1.5rem), lg (1rem 2rem)
- Font weight: 600 for primary, 500 for secondary

### Card
- Background: surface
- Border: 1px solid border token
- Shadow: md; on hover: lg shadow
- Border radius: lg

### Input
- Border: 1px solid border
- Padding: 0.75rem
- Border radius: md
- Focus: ring accent-500 ring-offset-2
- Error: border error color, error message below in text-sm text-error

---
*Update tokens as design evolves.*