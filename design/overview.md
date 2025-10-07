# MKR Shift Website Direction

This playbook aligns the refreshed MKR Shift site around a consistent promise, design system, and Elementor implementation path.

## Brand Promise & Narrative
* **Positioning statement:** MKR Shift is the embedded operations partner that turns ambitious growth plans into dependable delivery. We sit beside founders and operations leaders to untangle processes, connect revenue teams, and measure the gains.
* **Audience lenses:**
  * High-growth B2B SaaS companies (Series A–C) tightening the connection between marketing, sales, and CS.
  * Transformation leaders inside established organisations modernising their operating rhythm.
  * Investors or board advisors who need proof the execution layer can keep pace with strategy.
* **Messaging pillars:**
  1. **Operational clarity** – diagnose bottlenecks and translate strategy into rituals, metrics, and ownership.
  2. **Connected revenue engines** – remove silos between marketing, sales, and success teams.
  3. **Measured momentum** – commit to KPIs and report back with transparent, repeatable progress.

## Voice & Content Principles
* Speak with confident pragmatism: concrete language, short sentences, low jargon.
* Lead with outcomes before deliverables (e.g., "38% faster cycle time" → "achieved through change adoption sprints").
* Highlight co-creation and embedded collaboration rather than one-off consulting.
* Every long-form block should finish with an action (CTA button, download, or contact link).

## Visual Identity
| Element | Spec | Notes |
| --- | --- | --- |
| **Primary colour** | `#102944` (Midnight Navy) | Global text accents, backgrounds, buttons. |
| **Secondary colour** | `#F6B73B` (Amber) | CTA emphasis, icon fills, progress indicators. |
| **Support colour** | `#3CBF9A` (Aquifer Green) | Positive states, stats highlights. |
| **Neutrals** | `#0B101A`, `#313949`, `#F5F7FA` | Primary body copy, dividers, background washes. |
| **Typography** | Headings: Poppins 600/700. Body: Inter 400/500. Numerals: IBM Plex Mono 500. | Set in Elementor → Site Settings → Typography. |
| **Illustration** | Use overlapping cards, dashboards, or workshop scenes with a subtle navy-to-black gradient overlay (`linear-gradient(180deg, rgba(16,41,68,0.72) 0%, rgba(16,41,68,0.28) 100%)`). |

### Layout System
* 1200px content width with 5% outer padding on large screens.
* Spacing scale based on 8px increments (24 / 32 / 48 / 64 / 96).
* Card radius 16px, pill radius 999px, shadows `0 24px 48px rgba(12, 31, 55, 0.12)`.
* Use subtle dividers: `1px solid rgba(16, 41, 68, 0.08)`.

### Buttons & Links
* Primary CTA: Navy background, amber hover underline, 18px top/bottom padding.
* Secondary CTA: Outline on light backgrounds, translucent white on dark backgrounds.
* Text links use underline on hover with 2px amber bottom border.

## Elementor Setup Checklist
1. **Global colours** – create tokens: Midnight Navy, Navy Dark, Amber, Aquifer Green, Slate, Mist.
2. **Global typography** – heading and body fonts per the table, set weights and sizes (H1 56/64, H2 40/48, H3 28/36, body 18/28, small text 16/24).
3. **Theme builder** – configure Header (sticky shrink), Footer, Single Post, Archive templates before building content pages.
4. **Flexbox containers** – enable in Elementor → Settings. All sections in the kit assume Flexbox layout.
5. **Custom CSS** – paste `elementor-custom-css.css` into Site Settings → Custom CSS. Add matching class names to widgets/containers.
6. **Global widgets** – save CTA, testimonial card, and stat counter as global widgets for cross-page reuse.

## Asset Guidance
* Replace placeholder logos with monochrome versions of actual clients (SVG preferred).
* Hero imagery should feature real project scenes or operations dashboards. Apply consistent gradient overlay for contrast.
* Capture testimonials with attribution (name, role, company) and optionally LinkedIn icons for credibility.

## QA Checklist Before Launch
* Confirm responsive behaviour at 1440px, 1024px, 768px, 430px breakpoints.
* Test buttons for keyboard focus states and ensure `:focus-visible` styling is applied.
* Optimise all images with WebP at 80% quality or better.
* Connect the contact form to your CRM or email marketing platform and enable spam protection (reCAPTCHA v3).
* Add Google Analytics / Tag Manager and verify conversion goals for the primary CTA buttons.
