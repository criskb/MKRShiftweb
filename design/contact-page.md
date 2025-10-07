# Contact / Consultation Page Layout

## Objective
Make it effortless for qualified prospects to book a consultation while setting expectations for what happens next.

## Hero Panel
* Left column: Heading "Book your Shift Session" (H1) and subcopy clarifying the 45-minute agenda (diagnose bottlenecks, align roadmap, next steps).
* Right column: Calendly embed or Elementor multi-step form inside a card with drop shadow (`form-card` class).
* Background: gradient `linear-gradient(135deg, rgba(16,41,68,0.08), rgba(60,191,154,0.18))` with abstract line SVG in bottom-right.

### Form Fields (Elementor Form)
1. Full Name (required)
2. Work Email (required, validation on business domains optional)
3. Company (required)
4. Role / Function (dropdown: Founder, Operations, RevOps, Transformation, Other)
5. Primary challenge (textarea 280 char limit)
6. Desired outcome timeline (radio buttons: ASAP, 1–3 months, 3–6 months, Exploring)
7. Consent checkbox ("I agree to receive follow-up communications")
* Success message links to prep guide and resources hub.

## Why Talk Section
* Three benefit cards (use Icon List widget with `benefit-card` class):
  1. Clarity on the top three blockers.
  2. First sprint outline within 48 hours.
  3. Alignment across leadership stakeholders.

## Preparation Checklist
* Accordion (Toggle widget) with items: Who should join, What data to have ready, How to prepare your team.
* Add icons using Elementor Toggle icon settings for quick scanning.

## Contact Details & Social Proof
* Split container: left column lists direct email, phone/Teams link, HQ location with Google Map embed; right column shows testimonial quote with headshot (`testimonial-card` styles reused).

## FAQs
* Use Elementor Toggle widget (enable FAQ Schema) with 4–5 answers covering pricing model, engagement length, confidentiality, and tech stack requirements.

## Final CTA
* Banner encouraging visitors to explore latest resources while they wait for the session confirmation. Button links to resources hub.

### Elementor Tips
* Apply `form-card` class to booking form container for consistent padding, border, and shadow (see CSS file).
* If embedding Calendly, wrap iframe in container with `form-card` class and set min-height 560px.
* Use Motion Effects → Fade In Up (150ms) for benefit cards to reinforce momentum.
