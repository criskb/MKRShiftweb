# Resources / Insights Hub Layout

## Page Goal
Convert visitors looking for frameworks and thought leadership into marketing-qualified leads by promoting lead magnets and events alongside editorial content.

## Hero Banner
* Left-aligned heading: "Insights that move teams forward".
* Short subheadline emphasising actionability.
* CTA buttons: "Browse Playbooks" (filter) and "Subscribe for Updates" (scroll to form).
* Background: light grey with abstract geometric shapes (SVG) anchored bottom-right.

## Filter Bar
* Use Elementor Tabs widget or JetSmartFilters (if available) with categories: All, Playbooks, Webinars, Articles, Templates.
* Each tab styled as pill with 24px horizontal padding, 40px height.

## Content Grid
* Elementor Loop Grid (3 columns desktop, 2 tablet, 1 mobile).
* Card structure (`resource-card` class):
  * Category pill (accent background `rgba(54, 179, 126, 0.12)` and text `#36B37E`).
  * Title (Poppins 600, 24px).
  * Summary (Inter 400, 16px, 2 line clamp).
  * Footer row with author avatar, read time, arrow icon.
* Hover: elevate card, arrow slides right 8px.

## Featured Resource Banner
* Full-width highlight between rows for premium lead magnet.
* Use Elementor Inner Section with background image and overlay, CTA button `cta-secondary`.

## Webinar Carousel
* Use Slides widget showing upcoming events. Each slide includes date badge, session title, CTA "Save your seat".

## Subscribe Panel
* Two-column: copy + form (Elementor Form widget). Offer "Monthly insights, zero spam" message.
* Add GDPR checkbox and success message with link to latest resource.

## SEO Considerations
* Add FAQ schema block with 3 Q&As about MKR Shift methodologies.
* Include intro copy (~180 words) with targeted keywords.

## Elementor Implementation Notes
* Save Loop Item template for resource card that uses dynamic data.
* Use Advanced Custom Fields for read time and downloadable asset type.
* Custom CSS classes referenced in `elementor-custom-css.css`.
