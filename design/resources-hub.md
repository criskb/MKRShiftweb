# Resources / Insights Hub Layout

## Page Goal
Convert visitors seeking frameworks and thought leadership into marketing-qualified leads by pairing lead magnets with editorial content.

## Hero Banner
* Left-aligned heading: "Insights that move teams forward".
* Subheadline emphasising actionability and ongoing access.
* CTA buttons: "Browse Playbooks" (scrolls to filtered grid) and "Subscribe for updates" (jump to form).
* Background: Mist grey (`#F5F7FA`) with geometric SVG anchored bottom-right.

## Filter Bar
* Elementor Tabs widget or JetSmartFilters with categories: All, Playbooks, Webinars, Articles, Templates.
* Style each tab as pill (height 40px, horizontal padding 24px, border radius 999px). Active tab uses navy fill with white text, inactive uses transparent background with 1px navy border.

## Content Grid
* Elementor Loop Grid (3 columns desktop, 2 tablet, 1 mobile).
* Card structure (`resource-card` class):
  * Category pill: background `rgba(246, 183, 59, 0.16)` with text `#102944`.
  * Title (Poppins 600, 24px) limited to two lines.
  * Summary (Inter 400, 16px) truncated to ~120 characters.
  * Footer row with author avatar (40px circle), read time, arrow icon that shifts on hover.
* Hover state: elevate card, arrow slides right 8px (handled in CSS).

## Featured Resource Banner
* Full-width highlight between grid rows for premium lead magnet.
* Use Inner Section with background image + overlay (navy gradient) and CTA button `cta-secondary`.
* Include bullet list of value points inside the banner.

## Webinar Carousel
* Use Slides or Loop Carousel showing upcoming events.
* Each slide includes date badge, session title, and CTA "Save your seat".
* Apply class `webinar-slide` for consistent padding.

## Subscribe Panel
* Two-column layout: copy on left, Elementor Form on right inside `form-card` container.
* Fields: Name, Work Email, Company, Dropdown for interest (Operations, Revenue, Change), GDPR consent.
* Success message links to latest playbook and invites to follow on LinkedIn.

## SEO & Schema
* Add intro copy (~180 words) incorporating keywords (operations consulting, revenue enablement, change adoption).
* Include FAQ schema block (3 Q&As) about MKR Shift methodologies.
* Ensure each Loop Item outputs meta description via custom field for social shares.

## Implementation Notes
* Save Loop Item template for resource card using dynamic data from Posts/ACF fields.
* Use taxonomy filters for categories; if using JetSmartFilters, place filter widgets above grid and set to AJAX.
* Custom CSS classes referenced here are defined in `elementor-custom-css.css`.
