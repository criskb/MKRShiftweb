# Home Page Structure & Elementor Build Guide

This guide translates the visual concept into concrete Elementor settings. Each section assumes Elementor Flexbox containers.

## 1. Announcement Strip (optional)
* **Purpose:** Surface time-sensitive announcements (events, reports).
* **Container:** Full width, 40px height, background `#162D47`, text `#FFFFFF`.
* **Content:** Text widget (14px) with inline button styled as text link, icon preceding text.
* **Responsive:** Hide on mobile if no critical message.

## 2. Sticky Header
* **Structure:**
  * Outer container width: boxed 1200px, vertical padding 24px desktop / 16px tablet / 12px mobile.
  * Left: site logo (Image widget).
  * Right: Nav menu (Elementor Nav Menu) + primary CTA button "Book a Discovery Call".
* **Interaction:** Enable sticky on scroll (top) and reduce padding to 12px once scrolled.
* **CTA Button Style:** Class `cta-primary` (see custom CSS).

## 3. Hero Section – "Operational Clarity Starts Here"
* **Layout:**
  * Background: gradient `linear-gradient(135deg, #1C3A5F 0%, #0F253A 100%)`.
  * Padding: 120px top/bottom desktop, 80px tablet, 56px mobile.
  * Flex container with two columns (60/40 split). On mobile stack reverse (image under content).
* **Content:**
  * Eyebrow: "Scale with Confidence" (Poppins 600, 14px, letter-spacing 0.18em).
  * H1: "Operational clarity for teams moving fast" (Poppins 700, 52px desktop / 36px tablet / 30px mobile).
  * Paragraph: highlight pain points and solution (max width 520px).
  * Primary CTA: "Plan a Shift Session" (links to contact form anchor).
  * Secondary CTA: ghost button "Download the Operating Rhythm Playbook".
  * Trust badges row (3 logos) with grayscale filter 60% and tooltip on hover.
  * Right column: layered card featuring project snapshot (Image widget) overlapping KPI stat card (use inner container with `stat-card` class).

## 4. Clients/Logos Strip
* **Container:** White background, 40px top/bottom, flex wrap.
* **Widget:** Image carousel or icon list with grayscale logos.
* **Note:** Add subtle border top `1px solid rgba(28, 58, 95, 0.08)`.

## 5. Diagnostic Quiz CTA (optional micro-conversion)
* **Layout:** Full-width container with light grey background `#F5F7FA`, 64px padding.
* **Content:** Headline "Not sure where to start?" + short paragraph + CTA button linking to quiz.
* **Widget Suggestion:** Use Elementor Inner Sections for layout.

## 6. Services Pillars
* **Structure:**
  * Background: white, 96px padding desktop.
  * Section heading: "Where MKR Shift creates momentum" with supporting copy.
  * Use three columns (Elementor Container with direction row, gap 32px). Each card assigned class `service-card`.
* **Card Content:**
  1. **Operating Model Design** – bullet list of deliverables.
  2. **Revenue Enablement Systems** – emphasise alignment between marketing, sales, success.
  3. **Change Adoption & PMO** – emphasise governance & coaching.
* **Interaction:** Hover raises card 12px and changes top border to accent colour.

## 7. Outcomes Metrics Band
* **Layout:** Gradient background `linear-gradient(90deg, #1C3A5F 0%, #36B37E 100%)`, 64px padding.
* **Content:** Four columns with stat counters (use Elementor Counter widget) each inside `stat-card` class for consistent styling.
* **Copy Examples:**
  * "38%" – reduction in cycle time within 90 days.
  * "12" – cross-functional playbooks launched in 2024.
  * "4.9/5" – average stakeholder confidence score.
  * "3x" – faster onboarding of new team members.

## 8. Signature Framework (Process)
* **Layout:** White background, two-column.
* **Content:** Left column holds process illustration (upload as SVG). Right column uses Vertical Tabs widget labelled: Discover, Diagnose, Design, Drive.
* **Instruction:** Apply class `process-steps` to tabs container to enable accent progress indicator.

## 9. Case Studies Carousel
* **Section Settings:** Light background `#F5F7FA`, 96px padding.
* **Widget:** Elementor Slides or Loop Carousel pulling custom post type "Case Study".
* **Card Layout:** Feature quote, KPI, and CTA "Read the full story". Use `case-card` class.
* **Note:** Provide manual excerpt fields to control length.

## 10. Testimonial Wall
* **Layout:** 3-column masonry of testimonial cards on desktop, 2 on tablet, 1 on mobile.
* **Widget:** Elementor Testimonial Carousel or custom repeater.
* **Design:** Each card white with navy border-left 4px. Add headshot (circle) and LinkedIn icon.

## 11. Insight Resources Preview
* **Layout:** White background, 80px padding.
* **Content:** Section heading "Latest thinking" + filter buttons (All, Playbooks, Webinars, Articles) using Elementor Tabs widget styled as pills.
* **Cards:** Use Posts widget, apply `resource-card` class. Display category tag, title, 1-line summary, and CTA arrow.

## 12. Deep CTA "Book a Shift Session"
* **Layout:** Gradient overlay on dark image, 96px padding.
* **Content:** Short paragraph + CTA button + secondary link to see engagement models.
* **Elementor Settings:** align center on mobile, left on desktop.

## 13. Footer
* **Top area:** 4 columns – About, Services, Resources, Contact.
* **Bottom bar:** Newsletter form (Elementor Form widget) and social icons. Background `#0B101A`, text `rgba(255,255,255,0.72)`.
* **Credits:** Copyright, privacy policy, site by.

## Global Responsive Notes
* Switch to single-column stack below 768px for all multi-column areas.
* Reduce padding to 48px mobile, 64px tablet where 96px is used on desktop.
* Ensure background images have overlay for legibility on smaller screens.

## Elementor Template Export Suggestions
* Save Hero, Services Pillars, Outcomes Band, and CTA as individual templates for re-use across other pages.
* Use global widgets for CTA buttons so updates propagate.
