# 297 Lifestyle & Car Care — WEDE Final POE

**Student:** Molefi January  
**Project:** Responsive multi-page website for 297 Lifestyle & Car Care, Bloemfontein  
**Technologies:** HTML5, CSS3, JavaScript

## Files and folders

- `index.html` — homepage
- `about.html` — about page
- `services.html` — searchable service categories
- `gallery.html` — photo gallery with JavaScript lightbox
- `enquiry.html` — validated enquiry form demonstration
- `contact.html` — contact and map-search page
- `css/style.css` — styling, layout and responsive breakpoints
- `js/script.js` — mobile navigation, filtering, lightbox and form validation
- `assets/` — logo and gallery image assets
- `robots.txt` — crawler instructions
- `sitemap.xml` — site structure for search engines

## How to run locally

1. Extract the ZIP file.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the Live Server extension.
4. Test all six pages and links at mobile, tablet and desktop widths.

## Functionality included

- Responsive navigation menu for smaller screens.
- Search filter on the Services page.
- Gallery lightbox with click-to-open and Escape-to-close behaviour.
- Enquiry form connected to Formspree using the Vanilla JavaScript AJAX CDN integration, with required fields, email and phone checks, message length checks, field-level errors, submission feedback and a spam honeypot.
- SEO titles, descriptions, semantic headings, image alternative text, `robots.txt` and `sitemap.xml`.
- Reduced-motion support, visible keyboard focus and a skip link.

## Important content notes

The supplied project files have now been used: `assets/297-lifestyle-logo.png` contains the provided 297 Lifestyle & Car Care logo, and the gallery uses the five supplied photographs. Two of the supplied photos show food rather than vehicle care, so confirm whether you want to keep them in the final business gallery or replace them with car-care photos.

Service categories and the suggested mission statement are proposed website content, not verified claims. Confirm the real services, prices, contact details, hours and business history with the owner before publication.

The enquiry form submits to Formspree form ID `mjyypkeb` using `@formspree/ajax`. Before publishing, test a real submission, confirm the Formspree account email/notification settings, add the production domain in Formspree if required, and publish an appropriate privacy notice explaining that submitted details are processed by Formspree.

## Before publishing

1. Replace `example.com` in `sitemap.xml` and `robots.txt` with the final hosting domain.
2. Verify service descriptions, prices, address, contact details and social media links with the business owner.
3. Confirm whether the supplied food photos should remain in the gallery or be replaced with vehicle-care photos.
4. Test the forms and navigation on different screen sizes.
5. Deploy to GitHub Pages, Netlify or another platform allowed by the course.
6. Add dated, detailed feedback and correction entries to the changelog below.

## Changelog

- 2026-10-18 — Created the first final-POE website draft with six pages, responsive CSS, JavaScript interactions, form validation and SEO files.
- Pending — Replace placeholder brand/gallery assets when the official Facebook page or approved photos are supplied.
- Pending — Update website after lecturer feedback from Part 2.

## References

- MDN Web Docs (n.d.) *Responsive design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 18 October 2026).
- MDN Web Docs (n.d.) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries (Accessed: 18 October 2026).
- MDN Web Docs (n.d.) *Using the Web Content Accessibility Guidelines*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility (Accessed: 18 October 2026).

- 2026-10-26 — Replaced the temporary logo with the logo supplied in the project ZIP and added all five supplied photographs to the gallery with alt text and lightbox support.


### Visual update (29 October 2026)
- Updated the site to use the supplied Ikhayalethu Car Care logo artwork.
- Applied the logo palette: navy blue, orange, white, and black.
- Used the supplied logo as the homepage and page-banner background, with a faint logo watermark behind the page content.
- Replaced the homepage placeholder gallery thumbnails with photos supplied in the project ZIP.


## Final visual update (29 October 2026)
- Removed black as a design colour and aligned the website palette with the supplied logo: navy blue, blue, orange and white.
- Improved the header, buttons, cards, page banners, forms and footer with consistent spacing, borders and restrained shadows.
- Kept the logo visible as a subtle page background and as the banner background, while preserving text readability.


## Formspree integration update (2 November 2026)

- Selected the Vanilla JavaScript (AJAX) guide because this project uses plain HTML, CSS and JavaScript rather than React.
- Connected `enquiry.html` to `https://formspree.io/f/mjyypkeb` and initialized the Formspree AJAX SDK with form ID `mjyypkeb`.
- Added `data-fs-field`, field-level `data-fs-error`, form-level success/error feedback, and a submission button state hook.
- Added a hidden `_gotcha` honeypot field and a descriptive `_subject` field.
- Removed the previous demo-only submit handler that prevented the form from sending. Kept the character counter and service preselection behaviour.
- Browser validation remains active through required, email, minlength, maxlength and phone pattern attributes.

### Form testing checklist

1. Open `enquiry.html` using Live Server or the deployed website.
2. Submit with required fields empty and confirm browser validation appears.
3. Submit a valid test enquiry and confirm the success message appears.
4. Check the Formspree dashboard/inbox for the test submission.
5. Check the form on a phone-sized screen and confirm field errors and status messages are readable.
6. Confirm the business privacy notice and Formspree notification settings before collecting real customer information.
