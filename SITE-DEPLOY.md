# Xtratech website - deployment notes

The public website is a plain static site. No build step, no dependencies.

- **Web root:** `docs/`
- **Pages:** `index.html`, `solutions.html`, `products.html`, `industries.html`, `about.html`, `contact.html`
- **Shared files:** `assets/css/style.css`, `assets/js/main.js`, `assets/img/*`
- **SEO files:** `robots.txt`, `sitemap.xml` (canonical domain https://xtratechgs.com)
- All asset paths are relative, so the site works from the domain root or from a subpath (e.g. GitHub Pages preview).

## Deploy
**Automatic (GitHub Actions):** `.github/workflows/deploy.yml` copies `docs/` to the server over SSH on every push to `main` that changes `docs/`. It does nothing until these repository secrets exist (Settings -> Secrets and variables -> Actions): `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `SSH_KNOWN_HOSTS`, `DEPLOY_PATH`, and optionally `SSH_PORT`. Use a dedicated deploy key for a user that can only write to the web root. Run it manually from the Actions tab with "Run workflow".

**Manual:** copy the contents of `docs/` to the web root on the server (nginx `root` pointing at that folder). No `CNAME` file is needed unless the domain is served by GitHub Pages.

## Editing
Header, footer and mobile menu are repeated in each page file. When changing navigation, update all 6 `.html` files.

## Known gaps (not yet fixed)
- The contact form (`contact.html`) does not send anything. It only shows a success message. It needs a real backend (email service, form service or API) before the site is promoted.
- The repo root contains a `.env` file from the earlier Lovable project. It holds only Supabase project ID, URL and publishable key (checked 2026-11-18, key names only) and the website does not use it. Do not add any secret/service-role key to this repo.
