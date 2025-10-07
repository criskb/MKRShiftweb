# MKR Shift Web Redesign Kit

This folder contains everything needed to recreate the proposed MKR Shift website inside WordPress using Elementor.

## Files
| File | Purpose |
| --- | --- |
| `overview.md` | Brand positioning, visual language, and implementation guidance. |
| `homepage-structure.md` | Step-by-step Elementor build instructions for the home page. |
| `homepage.html` | Reference markup demonstrating hierarchy, copy tone, and component usage. |
| `elementor-custom-css.css` | Custom CSS tokens and component styles to paste into Elementor Site Settings. |
| `services-modules.md` | Modular sections for the Services page. |
| `resources-hub.md` | Layout and interaction notes for the Insights/Resources hub. |
| `contact-page.md` | Consultation-focused contact page blueprint. |

## How to Use in Elementor
1. **Set global styles** using the colour palette and typography in `overview.md` (Site Settings → Global Colours/Fonts).
2. **Create Templates** for repeatable sections (Hero, Services, CTA) following `homepage-structure.md`.
3. **Apply CSS classes** noted in the documents, then paste the contents of `elementor-custom-css.css` into Site Settings → Custom CSS.
4. **Reference the copy** in `homepage.html` as a starting point, adjusting language to match current offerings.
5. **Build additional pages** using the modules described for services, resources, and contact.

## Recommended Plugins
* Elementor Pro (for Theme Builder, Loop Grid, Forms).
* ACF Pro (custom fields for case studies/resources metadata).
* JetEngine or JetSmartFilters (optional) for advanced filtering on the resources hub.

## Accessibility Considerations
* Maintain colour contrast ratios (primary navy on white > 7:1, amber buttons on navy > 4.5:1).
* Ensure button text is descriptive (e.g., "Plan a Shift Session" instead of "Learn more").
* Add `aria-labels` to carousels and form inputs.

## Next Steps
* Replace placeholder images and dummy data with real assets.
* Create Elementor templates for case study single pages and blog posts using the same design system.
* Integrate analytics and conversion tracking once templates are published.
