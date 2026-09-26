# Product brief — DOUI VOYAGE local travel agency website

## Copy/paste generation prompt

Design and build a modern, polished, Arabic-first website for **DOUI VOYAGE دوي للسفر**, a local travel agency in Aïn Defla, Algeria. The primary business goal is to generate qualified inbound phone calls and travel inquiry form submissions. The brand should feel clean, trustworthy, warm, professional, and rooted in the local community—not like a generic booking marketplace. Use a sophisticated deep forest-green, warm ivory, and muted sage palette, strong Arabic typography, generous whitespace, clear hierarchy, subtle editorial travel imagery, and responsive layouts. Make Arabic the default language and use RTL layout throughout.

### Known business facts (use exactly; do not invent)
- Business name: DOUI VOYAGE / دوي للسفر
- Category: travel agency / مكتب سفريات
- Google rating: 4.2 from 32 reviews
- Address: Rue du 20 Aôut 1955، عين الدفلى 44000, Algeria
- Phone: 027 50 42 61 (international link format: +21327504261)
- Hours: listed as open 24 hours
- Plus code: 7X65+C7, Aïn Defla
- Review excerpts provided by owner/user:
  - “فريق محترف و خدمة جد مرضية. ربي يوفقكم”
  - “نوعا ما معاملة ناقصة”
  - “الله يبارك”

Do not fabricate an email address, WhatsApp availability, booking inventory, specific destinations, pricing, service guarantees, or credentials. Describe services as helping visitors explore travel options and plan their inquiry; invite visitors to call to confirm details and availability. Preserve the mixed review sentiment and present the rating as a supplied Google listing fact.

### Page structure
1. Slim announcement strip with a clear tap-to-call link.
2. Header with brand mark, concise section navigation, phone CTA, and mobile menu.
3. Conversion-focused hero with a memorable Arabic headline, short supporting copy, primary phone CTA, secondary services link, locally grounded trust cue, and rating badge.
4. Compact business trust strip for local presence, listed hours, and directions.
5. Three service/inquiry pathways written cautiously and without unsupported guarantees.
6. “Why choose us” section centered on local service, direct communication, and clarity.
7. Testimonials with supplied review text, rating (4.2/5), and 32-review count.
8. Contact section with a short form (name and phone required; destination and message optional), visible phone number, and address.
9. Directions link and a complete footer.

### Functional requirements
- All phone CTAs use `tel:+21327504261` and display `027 50 42 61`.
- Directions links open Google Maps search for DOUI VOYAGE in Aïn Defla.
- Navigation anchors work; mobile navigation is keyboard accessible and has correct expanded state.
- Form fields have labels, validation, and accessible status feedback. A production form must POST to a configured, real endpoint and only show success after a successful response. Never imply that inquiries were delivered if no endpoint is configured.
- Responsive from small mobile through wide desktop; visible focus states, semantic landmarks, reduced-motion support, and readable contrast.
- Avoid unsupported social links, invented contact details, dead-end buttons, and misleading booking promises.

### Success measures
- Phone CTA is visible without scrolling on common mobile and desktop viewports.
- Visitors can find location, hours, reviews, and contact details quickly.
- Form completion remains short and clear; production analytics can measure calls, directions clicks, and completed inquiries after consent/configuration.

### Acceptance criteria
- Arabic is the default language with correct RTL rendering.
- Page looks credible and polished on mobile and desktop.
- No business facts outside the supplied information are presented as verified.
- The form's backend status is clearly identified/configured before production launch.
