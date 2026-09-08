# GWC Information Systems

Responsive informational website built with React, TypeScript, and Vinext.

## Develop and build

Requires Node.js 22.13 or newer and npm.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm run verify:dist
npm run preview
```

`npm run build` creates a deployable **dist/** folder. It contains prerendered HTML for the home, privacy, accessibility, and 404 pages, minified JavaScript and CSS with hashed filenames, and `.nojekyll`. No server, credentials, or source maps are required. HTML inline scripts/styles are minified while preserving the whitespace and comments React needs for correct hydration.

The static preview is http://127.0.0.1:4173/gwc-info-systems/ and serves only files from dist. Do not open index.html using file://; browsers resolve the project-relative assets through HTTP.

## GitHub Pages

The default build prefix is `/gwc-info-systems`, matching https://harvanchik.github.io/gwc-info-systems/.

1. In repository **Settings > Pages**, choose **GitHub Actions** as the source. Private repositories require a GitHub plan that supports Pages; changing repository visibility is not required by this project and is not automated.
2. Open **Actions > GitHub Pages > Run workflow** on `main` to publish.

Pushes and pull requests automatically build and validate the artifact. Publishing is a separate, manual workflow run. The deployment job has narrowly scoped Pages and OIDC permissions and uses the `github-pages` environment.

The workflow uploads **dist/**; generated files remain ignored in Git. No branch-specific `/docs` folder or committed dependencies are needed. GitHub serves production compression and HTTPS; enable Enforce HTTPS in Pages settings where applicable.

For a custom domain hosted at its root, set `PAGES_BASE_PATH` to an empty string before both build and preview, and configure the same value in the workflow. Rebuild whenever the base path changes.

## Existing Sites version

`npm run build:sites` retains the original Sites/Cloudflare build. `.openai/hosting.json` preserves that project association. This command replaces dist with the Sites build; run `npm run build` again before deploying to GitHub Pages. GitHub pushes do not modify the existing private Sites publication.

## Content and verification

The headshot is a placeholder. Services use client-supplied draft copy. Confirm business copy before public launch.

- `app/page.tsx`: primary website content
- `app/globals.css`: responsive styling
- `app/privacy/page.tsx`, `app/accessibility/page.tsx`: notices
- `lib/site-path.ts`: internal URL prefix
- `scripts/verify-dist.mjs`: checks exported pages, CSS, and local links

The compiled Pages build was browser-tested at 320, 390, and 1280 pixels, including direct loads of all three pages, navigation, CSS loading, and the back-to-top control, with no page errors or failed asset requests. Earlier accessibility checks covered 200% text enlargement, keyboard access, and automated WCAG checks. These are not legal certification or a full assistive-technology audit.
