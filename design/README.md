# MKR Shift Web Redesign Kit

This folder contains the assets and instructions to rebuild the refreshed MKR Shift website inside WordPress + Elementor Pro.

## What's Inside
| File | Description |
| --- | --- |
| `overview.md` | Brand direction, tone, colour system, and Elementor setup checklist. |
| `homepage-structure.md` | Section-by-section workbook for recreating the homepage using Flexbox containers. |
| `homepage.html` | Reference markup showing hierarchy, copy tone, and class names that map to the custom CSS. |
| `elementor-custom-css.css` | CSS tokens and component styles to paste into **Site Settings → Custom CSS**. |
| `services-modules.md` | Reusable service page sections (problem framing, packages, FAQs). |
| `resources-hub.md` | Guidance for the insights hub including loop templates and filters. |
| `contact-page.md` | Blueprint for the consultation-first contact page. |

## Quick Start for Elementor
1. Install/activate Elementor Pro and enable Flexbox containers (Elementor → Settings → Experiments).
2. Configure global colours/typography using the palette and scale in `overview.md`.
3. Paste the contents of `elementor-custom-css.css` into **Site Settings → Custom CSS**.
4. Build the homepage following `homepage-structure.md`, saving major sections (Hero, Services, Outcomes, CTA) as templates for reuse.
5. Use `homepage.html` for copy scaffolding and to see which CSS classes should be applied to each container or widget.
6. Assemble the Services, Resources, and Contact pages with their respective module guides.

## Recommended Plugins & Integrations
* Elementor Pro (Theme Builder, Loop Grid, Forms, Popup builder for lead magnets).
* ACF Pro or Meta Box (structured data for case studies, testimonials, resources).
* JetSmartFilters or FacetWP (optional) for resource filtering if Elementor Tabs are insufficient.
* Gravity Forms or HubSpot Forms for CRM integration if more complex workflows are required.

## Implementation Tips
* Replace placeholder imagery with brand photography and convert to WebP before upload.
* Set up motion effects sparingly—200ms fade/slide is sufficient for cards and counters.
* Enable `:focus-visible` outline in the custom CSS when adding new buttons or links to preserve accessibility.
* Use Elementor's Navigator to apply classes quickly and maintain a clean layer structure.

## Launch Checklist
* Test responsive behaviour at 1440px, 1024px, 768px, 430px breakpoints.
* Verify header and CTA buttons remain clickable when sticky state is active.
* Connect forms to your CRM or email marketing platform and enable reCAPTCHA v3.
* Update SEO basics: page titles, meta descriptions, Open Graph images, and Schema (FAQ, Article, Service).
* Add Google Analytics/Tag Manager and set conversion events for the "Book a Shift Session" CTA.
