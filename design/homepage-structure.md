# Homepage Build Workbook (Elementor)

Each section below lists the copy, widgets, layout settings, and CSS classes required to recreate the design inside Elementor Pro using Flexbox containers.

## Global Section Defaults
* Content width 1200px, column gap 32px, row gap 32px.
* Desktop padding 96px top/bottom unless stated otherwise. Tablet 72px, mobile 48px.
* Apply classes from `elementor-custom-css.css` where noted.

---

## 1. Sticky Header + Utility Strip
| Item | Widget | Settings | Notes |
| --- | --- | --- | --- |
| Utility strip | Container | Height 40px, background `#102944`, align center | Optional announcements (text + icon list). |
| Header container | Container | Background `#FFFFFF`, padding 24px top/bottom desktop, 16px tablet, 12px mobile, sticky top | Enable Motion Effects → Sticky → Top. Add class `site-header`. |
| Logo | Image | Width 148px | Upload SVG logo. |
| Nav | Nav Menu | Layout Horizontal, pointer Underline, typography Inter 500 16px | Add class `header-nav`. |
| CTA | Button | Text "Book a Shift Session", size Large | Add class `cta-primary`. |

Interaction: use Motion Effects → Scrolling Effects → Transparency (from 0 to 1) on a duplicate header state or use custom CSS `.site-header.is-stuck` from stylesheet.

---

## 2. Hero "Operational clarity for teams moving fast"
| Element | Widget | Key Settings |
| --- | --- | --- |
| Section container | Container | Background gradient `linear-gradient(135deg, #102944 0%, #061427 100%)`; padding 128px desktop / 96px tablet / 72px mobile; gap 48px; direction row desktop, column-reverse mobile; align center; class `hero` |
| Eyebrow | Heading | HTML tag `div`, Poppins 600 14px, letter spacing 0.18em, uppercase | Class `eyebrow`. |
| Title | Heading | H1, Poppins 700 56/64, max width 520px | Copy: "Operational clarity for teams moving fast". |
| Body copy | Text Editor | Inter 400 20/32, max width 520px | Copy: describe partnership and outcomes. |
| Primary CTA | Button | Text "Plan a Shift Session", link `#contact`, size XL | Class `cta-primary`. |
| Secondary CTA | Button | Text "Download the Operating Rhythm Playbook", link to resource page | Class `cta-secondary`. |
| Trust logos | Inner container | Direction row, gap 24px, align center | Each logo as Image widget (120x40). Add class `trust-row`. |
| Hero visual | Inner container | Background `#0C1F37`, padding 24px, border radius 24px, align center | Inside place Image widget (dashboard mock) and nested container with stat counter (class `stat-card`). |

Animation: apply Entrance Animation → Fade In Up (200ms delay) to CTA group and stat card.

---

## 3. Logo Wall
* Container background `#FFFFFF`, padding 48px top/bottom.
* Use a repeater container with 5 Image widgets sized 120x40, apply grayscale filter via class `logo-wall`.
* Add bottom border `1px solid rgba(16, 41, 68, 0.08)`.

---

## 4. Services Pillars
| Element | Widget | Settings |
| --- | --- | --- |
| Section container | Container | Background `#FFFFFF`, gap 48px, align stretch |
| Heading block | Inner container | Align center, direction column | Title "Where MKR Shift creates momentum" (H2). Paragraph (Inter 400 20/32) emphasising outcomes. |
| Card grid | Container | Direction row wrap, gap 32px, align stretch | Assign class `service-grid`. |
| Service card | Inner container | Background `#FFFFFF`, padding 32px, border radius 16px, min height 100%, class `service-card` | Each card contains H3, paragraph, and Icon List with 3 bullet points.

Copy prompts:
1. **Operating Model Design** – emphasise rituals, governance, metrics.
2. **Revenue Enablement Systems** – connect marketing → sales → success.
3. **Change Adoption & PMO** – embed program leadership and training.

---

## 5. Outcomes Band
* Background gradient `linear-gradient(90deg, #102944 0%, #3CBF9A 100%)`.
* Container direction row wrap, gap 24px, justify center, class `outcomes`.
* Each stat uses Counter widget inside container with class `stat-card`. Example counters: `38%`, `12`, `4.9/5`, `3x` with short captions.

---

## 6. Signature Framework (Process)
| Element | Widget | Settings |
| --- | --- | --- |
| Section container | Container | Background `#F5F7FA`, padding 96/72/56, direction row desktop (column mobile) |
| Visual | Image | Upload process diagram or workshop photo | Add class `process-visual`. |
| Content | Tabs | Layout Vertical, 4 items labelled Discover, Diagnose, Design, Drive | Apply class `process-tabs`. Fill each tab with a short paragraph + list of deliverables. |

---

## 7. Case Studies Carousel
* Background `#FFFFFF`.
* Use Loop Carousel (Elementor Pro) pulling Case Study CPT.
* Card template includes quote (Heading), KPI (Counter), summary (Text Editor), CTA (Button `Read the full story`). Add class `case-card` to wrapper.
* Configure slides to show 2.5 cards on desktop, 1.2 on tablet, 1 on mobile.

---

## 8. Testimonial Wall
* Background `#F5F7FA`.
* Use Posts widget pointing to testimonial CPT or manual repeater using nested containers.
* Each testimonial card: white background, border-left `4px` Amber, padding 32px, class `testimonial-card`.
* Include headshot (Image 72px circle), name, role, LinkedIn icon (Icon widget).

---

## 9. Insights Preview
| Element | Widget | Settings |
| --- | --- | --- |
| Section container | Container | Background `#FFFFFF`, gap 40px |
| Header | Inner container | Title "Latest thinking" (H2) + paragraph | Add Filter buttons using Tabs widget styled as pills (`filter-pills`). |
| Card grid | Loop Grid | 3 columns desktop, 2 tablet, 1 mobile | Template uses featured image, category badge, title, excerpt, CTA arrow. Assign class `resource-card`.

---

## 10. CTA "Book a Shift Session"
* Container background: dark image with overlay `linear-gradient(120deg, rgba(16, 41, 68, 0.9) 0%, rgba(16, 41, 68, 0.6) 100%)`.
* Align content left desktop, center mobile.
* Include heading (H2), supporting sentence, CTA button (class `cta-primary`) and secondary text link.

---

## 11. Footer
| Element | Widget | Settings |
| --- | --- | --- |
| Top container | Container | Background `#0B101A`, text colour rgba(255,255,255,0.84), padding 72/56/48, direction row wrap |
| Column 1 | Heading + Text | H4 "About MKR Shift" + 2-line description | |
| Column 2 | Nav Menu | Links to services pages | |
| Column 3 | Nav Menu | Resources links | |
| Column 4 | Form | Elementor Form for newsletter (Name, Email) with inline submit button | Add class `footer-form`. |
| Bottom bar | Container | Border-top `1px solid rgba(255,255,255,0.12)`, padding 24px | Include copyright, privacy link, social icons.

### Responsive Notes
* Collapse card grids to single column below 768px.
* Adjust typography: H1 42px, H2 32px, body 18px on mobile.
* Ensure CTA buttons expand to full width on screens <480px.

### Implementation Tips
* Save each section as a template after building; reuse across services and resource pages.
* Leverage Elementor's "Navigator" to apply classes quickly.
* Use the included CSS focus styles to maintain accessibility when customising buttons or links.
