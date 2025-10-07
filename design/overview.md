# MKR Shift Website Redesign Overview

## Brand Positioning
MKR Shift is a strategic operations and growth consultancy that helps scaling organisations align people, process, and technology. The redesigned site positions the firm as a trusted partner delivering measurable operational change.

* **Tone of voice:** decisive, empathetic, expert.
* **Target audiences:** founders and operations leaders in scale-ups (Series A–C), transformation directors inside mid-size enterprises, and investors who influence operational roadmaps.
* **Core value pillars:** Operational clarity, cross-functional alignment, and measurable impact.

## Visual Direction
| Element | Recommendation |
| --- | --- |
| **Primary colour** | `#1C3A5F` (Deep Navy) – anchors trust and sophistication |
| **Accent colour** | `#F1B722` (Amber) – highlights calls-to-action |
| **Support colour** | `#36B37E` (Emerald) – progress indicators and success stats |
| **Background** | `#F5F7FA` (Cool light grey) with white cards for depth |
| **Typography** | Headings: "Poppins" 700/500. Body: "Inter" 400/500. Monospace: "IBM Plex Mono" for data callouts |
| **Icon style** | Simple outline icons with 2px stroke, rounded corners |
| **Imagery** | High-contrast photography showing collaboration, overlaid with translucent navy gradient | 

### Layout System
* **Grid:** 1200px wide container, 12-column layout, 30px gutter. Edge padding 5% on desktop, 24px on mobile.
* **Spacing scale:** 8px base unit. Common stack: 16, 24, 32, 48, 64, 96.
* **Corner radius:** 12px on cards, 999px on pills/buttons.
* **Shadow:** `0 24px 48px rgba(12, 31, 55, 0.12)` for elevated content.

### Button Styles
* **Primary CTA:** Navy background `#1C3A5F`, white text, 18px/32px padding, hover shifts to `#162D47` with 2px amber underline.
* **Secondary CTA:** White background, 1px navy border, navy text, hover fill `#1C3A5F` with white text.

### Motion & Interaction
* Subtle 200ms ease-out fade-up on cards as they enter viewport.
* Sticky header condenses from 96px to 72px on scroll.
* Interactive stats counters animate from 0 to value when scrolled into view.

## Content Strategy Highlights
1. **Promise > Proof > Path**: Lead with a bold promise, follow with proof (case studies, testimonials), end with actionable next step.
2. **Outcomes-first copy:** emphasise quantifiable results (time saved, productivity uplift, ROI).
3. **Thought leadership hub:** highlight frameworks, playbooks, and webinars for ongoing lead capture.

## Technical Notes for WordPress + Elementor
* Define global colours and typography tokens in Elementor Theme Style before building pages.
* Use Elementor Flexbox containers for all new sections to simplify responsive behaviour.
* Custom CSS in the provided stylesheet should be pasted into **Site Settings → Custom CSS**.
* Leverage Elementor's Template Kits to create reusable blocks (Hero, Testimonials, CTA) for future pages.

## Pages Included in this Design Package
1. Home (detailed structure and mock markup provided)
2. Services overview (modular content blocks described in `services-modules.md`)
3. Insights/Resources hub (card layout and filtering notes in `resources-hub.md`)
4. Contact/Consultation booking (form-first layout)

> Refer to each page document for Elementor build steps, copy prompts, and widget-level settings.
