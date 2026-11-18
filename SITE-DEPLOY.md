# Xtratech website - deployment notes

The public website is a plain static site. No build step, no dependencies.

- **Web root:** `docs/`
- **Pages:** `index.html`, `solutions.html`, `products.html`, `industries.html`, `about.html`, `contact.html`
- **Shared files:** `assets/css/style.css`, `assets/js/main.js`, `assets/img/*`
- **SEO files:** `robots.txt`, `sitemap.xml` (canonical domain https://xtratechgs.com)
- All asset paths are relative, so the site works from the domain root or from a subpath (e.g. GitHub Pages preview).

## Deploy
Copy the contents of `docs/` to the web root on the server (nginx `root` pointing at that folder). No `CNAME` file is needed unless the domain is served by GitHub Pages.

## Editing
Header, footer and mobile menu are repeated in each page file. When changing navigation, update all 6 `.html` files.

## Known gaps (not yet fixed)
- The contact form (`contact.html`) does not send anything. It only shows a success message. It needs a real backend (email service, form service or API) before the site is promoted.
- Security: the repo root contains a `.env` file from the earlier Lovable project. Review it and rotate any secret keys. The website itself does not use it.
