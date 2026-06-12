# Co-op Camp Sierra Website

Static HTML/CSS site for Co-op Camp Sierra, built for GitHub Pages.

## File Structure

```
/
├── index.html                  ← Homepage
├── css/
│   └── style.css               ← All styles
├── images/                     ← Your photos go here
│   ├── hero-camp.jpg           (homepage hero background)
│   ├── about-hero.jpg          (about page hero)
│   ├── activities-hero.jpg     (activities page hero)
│   ├── twin-pines-hero.jpg     (Twin Pines page hero)
│   ├── contact-hero.jpg        (contact page hero)
│   └── ...any other photos
├── pdfs/                       ← PDFs go here
│   ├── 2026_Week_at_a_Glance.pdf
│   ├── 2025_Week_at_a_Glance.pdf
│   ├── twin-pines-2025-day1.pdf
│   └── ... more issues
└── pages/
    ├── about.html
    ├── activities.html
    ├── twin-pines.html         ← NEW: newspaper archive + submit form
    ├── registration.html
    └── contact.html
```

## Deploying to GitHub Pages

1. Create a GitHub repo (e.g. `coopcamp-website`)
2. Upload all files, preserving the folder structure
3. Go to **Settings → Pages → Source: Deploy from branch → main / root → Save**
4. Live at `https://yourusername.github.io/coopcamp-website/`

### Custom domain (coopcamp.com)
1. In GitHub Pages settings enter `coopcamp.com` under *Custom domain*
2. At your DNS registrar add these A records:
   ```
   A  @  185.199.108.153
   A  @  185.199.109.153
   A  @  185.199.110.153
   A  @  185.199.111.153
   CNAME  www  yourusername.github.io.
   ```
3. Check *Enforce HTTPS* once DNS propagates (~24 hrs)

---

## Adding Photos

Every hero and section has a photo placeholder. To add a photo:

1. Save the image to the `images/` folder (JPG or WebP recommended, ~1200px wide for heroes)
2. Find the relevant HTML comment like:
   ```html
   <!-- <img src="images/hero-camp.jpg" alt="Campers at Co-op Camp Sierra"> -->
   ```
3. Remove the `<!--` and `-->` comment markers to activate it
4. For hero backgrounds, update the `style="background-image: url('images/your-photo.jpg');"` on the `<header>` tag

---

## Adding Twin Pines Issues

1. Save PDFs to the `pdfs/` folder (e.g. `twin-pines-2025-day6.pdf`)
2. In `pages/twin-pines.html`, find the commented-out card template and copy/uncomment it:
   ```html
   <a class="newspaper-card" href="../pdfs/twin-pines-2025-day6.pdf" target="_blank">
     ...
   </a>
   ```
3. Update the filename, date, title, and description text

---

## Adding Schedule PDFs

1. Save your Week at a Glance PDF to `pdfs/2026_Week_at_a_Glance.pdf`
2. The Activities page will automatically embed it
3. For past years, uncomment the list items in the "Past Years" tab in `pages/activities.html`

---

## Common Edits

| What to change | Where |
|---|---|
| Camp dates | `index.html` info strip + `pages/registration.html` header |
| Fees/pricing | `pages/registration.html` pricing section |
| Google Form URL | `pages/registration.html` iframe `src` |
| PayPal button ID | Replace `YOUR_BUTTON_ID` in any page |
| Colors/fonts | `css/style.css` `:root` variables at the top |
| Nav links | Update in every `.html` file (search for `site-nav`) |
